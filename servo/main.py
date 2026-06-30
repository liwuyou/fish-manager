import json
import os
import time
import threading
from flask import Flask, request, jsonify, send_from_directory
from flask_sock import Sock

DATA_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'data')
STATIC_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'static')
USERS_FILE = os.path.join(DATA_DIR, 'users.json')
DEVICES_FILE = os.path.join(DATA_DIR, 'devices.json')
SERVO_LOG_FILE = os.path.join(DATA_DIR, 'servo_log.json')

HEARTBEAT_TIMEOUT = 60

app = Flask(__name__, static_folder=STATIC_DIR, static_url_path='')
sock = Sock(app)

devices = {}
device_ws = {}
cmd_callbacks = {}

def load_json(filepath, default):
    if os.path.exists(filepath):
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                return json.load(f)
        except:
            return default
    return default

def save_json(filepath, data):
    with open(filepath, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

users = load_json(USERS_FILE, {})
devices = load_json(DEVICES_FILE, {})
servo_log = load_json(SERVO_LOG_FILE, [])

@app.route('/')
def index():
    return send_from_directory(STATIC_DIR, 'index.html')

@app.route('/api/bind', methods=['POST'])
def bind_device():
    data = request.json
    phone = data.get('phone', '') or data.get('phone_number', '')
    device_key = data.get('device_key', '')
    
    if not phone or not device_key:
        return jsonify({'success': False, 'message': '手机号和密钥不能为空'}), 400
    
    if device_key not in devices:
        devices[device_key] = {
            'device_key': device_key,
            'mac': '',
            'phone': phone,
            'online': False,
            'last_online': 0,
            'status': {}
        }
    else:
        devices[device_key]['phone'] = phone
    
    save_json(DEVICES_FILE, devices)
    
    if phone not in users:
        users[phone] = []
    
    if device_key not in users[phone]:
        users[phone].append(device_key)
        save_json(USERS_FILE, users)
    
    return jsonify({'success': True, 'message': '绑定成功'})

@app.route('/api/unbind', methods=['POST'])
def unbind_device():
    data = request.json
    phone = data.get('phone', '')
    device_key = data.get('device_key', '')
    
    if phone in users and device_key in users[phone]:
        users[phone].remove(device_key)
        save_json(USERS_FILE, users)
    
    return jsonify({'success': True})

@app.route('/api/devices', methods=['GET'])
def get_devices():
    phone = request.args.get('phone', '') or request.args.get('phone_number', '')
    if not phone or phone not in users:
        return jsonify({'success': True, 'devices': []})
    
    result = []
    for device_key in users[phone]:
        dev = devices.get(device_key, {})
        result.append({
            'device_key': device_key,
            'online': dev.get('online', False),
            'last_online': dev.get('last_online', 0),
            'status': dev.get('status', {})
        })
    
    return jsonify({'success': True, 'devices': result})

@app.route('/api/status', methods=['GET'])
def get_status():
    device_key = request.args.get('device_key', '')
    dev = devices.get(device_key, {})
    return jsonify({
        'success': True,
        'online': dev.get('online', False),
        'status': dev.get('status', {})
    })

@app.route('/api/control', methods=['POST'])
def control_device():
    data = request.json
    device_key = data.get('device_key', '')
    cmd = data.get('cmd', '')
    params = data.get('params', {})
    
    if not device_key or not cmd:
        return jsonify({'success': False, 'message': '参数错误'}), 400
    
    dev = devices.get(device_key)
    if not dev or not dev.get('online'):
        return jsonify({'success': False, 'message': '设备不在线'}), 404
    
    ws = device_ws.get(device_key)
    if not ws:
        return jsonify({'success': False, 'message': '设备连接已断开'}), 500
    
    cmd_id = str(int(time.time() * 1000))
    msg = json.dumps({
        'type': 'cmd',
        'cmd_id': cmd_id,
        'cmd': cmd,
        'params': params
    })
    
    try:
        ws.send(msg)
        return jsonify({'success': True, 'cmd_id': cmd_id})
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@sock.route('/ws/device')
def device_ws_handler(ws):
    device_key = None
    try:
        while True:
            data = ws.receive()
            if data is None:
                break
            
            try:
                msg = json.loads(data)
            except:
                continue
            
            msg_type = msg.get('type', '')
            
            if msg_type == 'hello':
                device_key = msg.get('device_key', '')
                if device_key:
                    device_ws[device_key] = ws
                    if device_key not in devices:
                        devices[device_key] = {
                            'device_key': device_key,
                            'mac': msg.get('mac', ''),
                            'phone': '',
                            'online': True,
                            'last_online': int(time.time()),
                            'status': {}
                        }
                    else:
                        devices[device_key]['online'] = True
                        devices[device_key]['last_online'] = int(time.time())
                        if msg.get('mac'):
                            devices[device_key]['mac'] = msg.get('mac', '')
                    save_json(DEVICES_FILE, devices)
                    print(f"[DEVICE] {device_key} 已连接")
                    
                    ws.send(json.dumps({'type': 'hello_ok'}))
            
            elif msg_type == 'heartbeat':
                if device_key and device_key in devices:
                    devices[device_key]['online'] = True
                    devices[device_key]['last_online'] = int(time.time())
                    save_json(DEVICES_FILE, devices)
                    print(f"[HEARTBEAT] {device_key}")
            
            elif msg_type == 'status':
                if device_key and device_key in devices:
                    devices[device_key]['status'] = msg.get('status', {})
                    devices[device_key]['online'] = True
                    devices[device_key]['last_online'] = int(time.time())
                    save_json(DEVICES_FILE, devices)
            
            elif msg_type == 'cmd_result':
                cmd_id = msg.get('cmd_id', '')
                result = msg.get('result', {})
                print(f"[CMD_RESULT] {cmd_id}: {result}")
                
                if 'servo' in str(msg.get('cmd', '')):
                    servo_log.append({
                        'time': int(time.time()),
                        'device_key': device_key,
                        'result': result
                    })
                    if len(servo_log) > 1000:
                        servo_log.pop(0)
                    save_json(SERVO_LOG_FILE, servo_log)
    
    except Exception as e:
        print(f"[WS_ERROR] {device_key}: {e}")
    finally:
        if device_key:
            if device_key in device_ws:
                del device_ws[device_key]
            if device_key in devices:
                devices[device_key]['online'] = False
                save_json(DEVICES_FILE, devices)
            print(f"[DEVICE] {device_key} 已断开")

def check_offline_devices():
    while True:
        try:
            now = int(time.time())
            for device_key, dev in devices.items():
                if dev.get('online') and now - dev.get('last_online', 0) > HEARTBEAT_TIMEOUT:
                    dev['online'] = False
                    print(f"[DEVICE] {device_key} 超时离线")
            save_json(DEVICES_FILE, devices)
        except:
            pass
        time.sleep(10)

if __name__ == '__main__':
    os.makedirs(DATA_DIR, exist_ok=True)
    os.makedirs(STATIC_DIR, exist_ok=True)
    
    offline_thread = threading.Thread(target=check_offline_devices, daemon=True)
    offline_thread.start()
    
    print("=" * 50)
    print("  养鱼生态箱 - 远程控制服务器")
    print("=" * 50)
    print(f"  HTTP 端口: 7965")
    print(f"  WebSocket: ws://<IP>:7965/ws/device")
    print(f"  数据目录: {DATA_DIR}")
    print("=" * 50)
    
    app.run(host='0.0.0.0', port=7965, debug=False, threaded=True)
