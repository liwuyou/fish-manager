# -*- coding: utf-8 -*-
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
TIMERS_FILE = os.path.join(DATA_DIR, 'timers.json')

HEARTBEAT_TIMEOUT = 60
SAVE_INTERVAL = 3  # 批量写入间隔（秒）

app = Flask(__name__, static_folder=STATIC_DIR, static_url_path='')
sock = Sock(app)

# ==================== 内存缓存 ====================
users = {}
devices = {}
servo_log = []

# 批量写入控制
_save_pending = False
_save_lock = threading.Lock()

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

def _background_save():
    """后台定时写入线程"""
    while True:
        time.sleep(SAVE_INTERVAL)
        global _save_pending
        if _save_pending:
            save_json(DEVICES_FILE, devices)
            save_json(USERS_FILE, users)
            _save_pending = False

def _schedule_save():
    """标记需要写入（防抖，3秒内多次修改只写一次）"""
    global _save_pending
    _save_pending = True

def _save_now():
    """立即强制写入"""
    global _save_pending
    save_json(DEVICES_FILE, devices)
    save_json(USERS_FILE, users)
    _save_pending = False

# ==================== App WebSocket 推送 ====================
client_subs = {}       # {device_key: set(ws)}
client_subs_lock = threading.Lock()

def broadcast_to_clients(device_key, msg):
    """向订阅了该设备的所有App客户端推送"""
    with client_subs_lock:
        subs = client_subs.get(device_key)
        if not subs:
            return
        dead = set()
        for ws in subs:
            try:
                ws.send(json.dumps(msg))
            except:
                dead.add(ws)
        if dead:
            subs -= dead

def subscribe_client(ws, device_key):
    """客户端订阅设备状态"""
    with client_subs_lock:
        if device_key not in client_subs:
            client_subs[device_key] = set()
        client_subs[device_key].add(ws)

def unsubscribe_client(ws):
    """客户端断开时清理所有订阅"""
    with client_subs_lock:
        for device_key, subs in list(client_subs.items()):
            subs.discard(ws)
            if not subs:
                del client_subs[device_key]

# ==================== 初始化 ====================
users = load_json(USERS_FILE, {})
devices = load_json(DEVICES_FILE, {})
servo_log = load_json(SERVO_LOG_FILE, [])
timers = load_json(TIMERS_FILE, {})

# ==================== 定时任务调度器状态 ====================
_last_executed_minute = {}  # {device_key: {timer_id: minute}}
_pending_stops = {}         # {stop_time_sec: [{device_key, msg}]}

# 启动后台写入线程
save_thread = threading.Thread(target=_background_save, daemon=True)
save_thread.start()

# ==================== HTTP 路由 ====================
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
        return jsonify({'success': False, 'message': '密匙输入错误或设备未向服务器注册'}), 400
    
    devices[device_key]['phone'] = phone
    
    if phone not in users:
        users[phone] = []
    
    if device_key not in users[phone]:
        users[phone].append(device_key)
    
    _save_now()  # 绑定立即写
    return jsonify({'success': True, 'message': '绑定成功'})

@app.route('/api/unbind', methods=['POST'])
def unbind_device():
    data = request.json
    phone = data.get('phone', '') or data.get('phone_number', '')
    device_key = data.get('device_key', '')
    
    if phone in users and device_key in users[phone]:
        users[phone].remove(device_key)
    
    _save_now()  # 解绑立即写
    return jsonify({'success': True})

@app.route('/api/devices', methods=['GET'])
def get_devices():
    phone = request.args.get('phone', '') or request.args.get('phone_number', '')
    if not phone or phone not in users:
        return jsonify({'success': True, 'devices': []})
    
    result = []
    for device_key in users.get(phone, []):
        dev = devices.get(device_key, {})
        result.append({
            'device_key': device_key,
            'online': dev.get('online', False),
            'last_online': dev.get('last_online', 0),
            'status': dev.get('status', {}),
            'model': dev.get('model', '')
        })
    
    return jsonify({'success': True, 'devices': result})

@app.route('/api/request_status', methods=['POST'])
def request_device_status():
    device_key = request.json.get('device_key', '')
    ws = device_ws.get(device_key)
    if not ws:
        return jsonify({'success': False, 'message': '设备离线'}), 500
    msg = json.dumps({
        'type': 'cmd',
        'cmd_id': str(int(time.time() * 1000)),
        'cmd': 'request_status',
        'params': {}
    })
    try:
        ws.send(msg)
        return jsonify({'success': True})
    except Exception as e:
        return jsonify({'success': False, 'message': str(e)}), 500

@app.route('/api/status', methods=['GET'])
def get_status():
    device_key = request.args.get('device_key', '')
    dev = devices.get(device_key, {})
    return jsonify({
        'success': True,
        'online': dev.get('online', False),
        'model': dev.get('model', ''),
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

# ==================== 定时任务 API ====================
@app.route('/api/timers', methods=['GET'])
def get_timers():
    device_key = request.args.get('device_key', '')
    if not device_key:
        return jsonify({'success': False, 'message': 'device_key required'}), 400
    return jsonify({'success': True, 'timers': timers.get(device_key, [])})

@app.route('/api/timers', methods=['POST'])
def save_timers():
    data = request.json
    device_key = data.get('device_key', '')
    timer_list = data.get('timers', [])
    if not device_key:
        return jsonify({'success': False, 'message': 'device_key required'}), 400
    timers[device_key] = timer_list
    save_json(TIMERS_FILE, timers)
    return jsonify({'success': True})

@app.route('/api/timers/delete', methods=['POST'])
def delete_timer():
    data = request.json
    device_key = data.get('device_key', '')
    timer_id = data.get('timer_id')
    if not device_key or timer_id is None:
        return jsonify({'success': False, 'message': '参数错误'}), 400
    device_timers = timers.get(device_key, [])
    timers[device_key] = [t for t in device_timers if t.get('id') != timer_id]
    save_json(TIMERS_FILE, timers)
    return jsonify({'success': True})

# ==================== WebSocket: 设备 ====================
device_ws = {}

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
                            'model': msg.get('model', ''),
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
                        if msg.get('model'):
                            devices[device_key]['model'] = msg.get('model', '')
                    _schedule_save()
                    print(f"[DEVICE] {device_key} 已连接")
                    
                    ws.send(json.dumps({'type': 'hello_ok'}))
                    
                    # 推送上线通知
                    broadcast_to_clients(device_key, {
                        'type': 'device_status',
                        'device_key': device_key,
                        'online': True,
                        'status': devices[device_key].get('status', {})
                    })
            
            elif msg_type == 'heartbeat':
                if device_key and device_key in devices:
                    devices[device_key]['online'] = True
                    devices[device_key]['last_online'] = int(time.time())
                    _schedule_save()
            
            elif msg_type == 'status':
                if device_key and device_key in devices:
                    devices[device_key]['status'] = msg.get('status', {})
                    devices[device_key]['online'] = True
                    devices[device_key]['last_online'] = int(time.time())
                    _schedule_save()
                    
                    # 推送到App客户端
                    broadcast_to_clients(device_key, {
                        'type': 'device_status',
                        'device_key': device_key,
                        'online': True,
                        'status': msg.get('status', {})
                    })
            
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
                _schedule_save()
            print(f"[DEVICE] {device_key} 已断开")
            
            broadcast_to_clients(device_key, {
                'type': 'device_status',
                'device_key': device_key,
                'online': False,
                'status': devices.get(device_key, {}).get('status', {})
            })

# ==================== WebSocket: App客户端 ====================
@sock.route('/ws/client')
def client_ws_handler(ws):
    phone = None
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
            
            if msg_type == 'auth':
                phone = msg.get('phone', '')
                if phone:
                    # 订阅名下所有设备
                    for device_key in users.get(phone, []):
                        subscribe_client(ws, device_key)
                        # 推送当前状态
                        dev = devices.get(device_key, {})
                        ws.send(json.dumps({
                            'type': 'device_status',
                            'device_key': device_key,
                            'online': dev.get('online', False),
                            'status': dev.get('status', {})
                        }))
                    print(f"[CLIENT] {phone} 已连接")
            
            elif msg_type == 'subscribe':
                device_key = msg.get('device_key', '')
                if device_key:
                    subscribe_client(ws, device_key)
                    # 推送当前状态
                    dev = devices.get(device_key, {})
                    ws.send(json.dumps({
                        'type': 'device_status',
                        'device_key': device_key,
                        'online': dev.get('online', False),
                        'status': dev.get('status', {})
                    }))
    
    except Exception as e:
        print(f"[CLIENT_WS_ERROR] {phone}: {e}")
    finally:
        if phone:
            print(f"[CLIENT] {phone} 已断开")
        unsubscribe_client(ws)

# ==================== 离线检测 ====================
def check_offline_devices():
    while True:
        time.sleep(10)
        try:
            now = int(time.time())
            changed = False
            for device_key, dev in devices.items():
                if dev.get('online') and now - dev.get('last_online', 0) > HEARTBEAT_TIMEOUT:
                    dev['online'] = False
                    changed = True
                    print(f"[DEVICE] {device_key} 超时离线")
                    broadcast_to_clients(device_key, {
                        'type': 'device_status',
                        'device_key': device_key,
                        'online': False,
                        'status': dev.get('status', {})
                    })
            if changed:
                _schedule_save()
        except:
            pass

# ==================== 定时任务调度器 ====================
def timer_scheduler():
    while True:
        time.sleep(30)
        now = time.localtime()
        current_hour = now.tm_hour
        current_minute = now.tm_min
        current_time_sec = int(time.time())

        try:
            # 处理到期的停止任务
            stop_keys = sorted(_pending_stops.keys())
            for stop_at in stop_keys:
                if stop_at > current_time_sec:
                    break
                for stop_item in _pending_stops.pop(stop_at, []):
                    device_key = stop_item['device_key']
                    ws = device_ws.get(device_key)
                    if ws:
                        try:
                            ws.send(json.dumps(stop_item['msg']))
                            print(f"[TIMER] 停止 {device_key}: {stop_item['msg']['cmd']}")
                        except:
                            pass

            # 处理定时任务
            for device_key, timer_list in list(timers.items()):
                for timer in timer_list:
                    if not timer.get('enabled', False):
                        continue
                    if timer.get('hour') != current_hour or timer.get('minute') != current_minute:
                        continue

                    # 检查是否已在本分钟执行过
                    if device_key not in _last_executed_minute:
                        _last_executed_minute[device_key] = {}
                    last_min = _last_executed_minute[device_key].get(timer['id'])
                    if last_min == current_minute:
                        continue

                    # 执行任务
                    ws = device_ws.get(device_key)
                    if not ws:
                        continue

                    cmd = timer['cmd']
                    params = timer.get('params', {})
                    cmd_id = str(int(time.time() * 1000)) + f"_{timer['id']}"
                    msg = {
                        'type': 'cmd',
                        'cmd_id': cmd_id,
                        'cmd': cmd,
                        'params': params
                    }

                    try:
                        ws.send(json.dumps(msg))
                        _last_executed_minute[device_key][timer['id']] = current_minute
                        print(f"[TIMER] 执行 {device_key}: {cmd} (timer_id={timer['id']})")
                    except:
                        continue

                    # 处理 duration>0 的停止任务
                    duration = timer.get('duration', 0)
                    if duration > 0:
                        stop_at = current_time_sec + duration
                        stop_msg = {'type': 'cmd', 'cmd_id': f'{cmd_id}_stop'}

                        if cmd == 'set_pump':
                            pump_val = params.get('pump', 1)
                            stop_msg['cmd'] = 'set_pump'
                            stop_msg['params'] = {'pump': pump_val, 'level': 0}
                        elif cmd == 'set_light':
                            stop_msg['cmd'] = 'set_light'
                            stop_msg['params'] = {'level': 0}
                        elif cmd == 'set_air_pump':
                            stop_msg['cmd'] = 'set_air_pump'
                            stop_msg['params'] = {'level': 0}
                        elif cmd == 'set_fan':
                            stop_msg['cmd'] = 'set_fan'
                            stop_msg['params'] = {'level': 0}
                        else:
                            # trigger_servo 等瞬时命令不需要 stop
                            continue

                        if stop_at not in _pending_stops:
                            _pending_stops[stop_at] = []
                        _pending_stops[stop_at].append({
                            'device_key': device_key,
                            'msg': stop_msg
                        })
                        print(f"[TIMER] 注册停止 {device_key}: {cmd} 将在 {duration}秒后执行")
        except:
            pass

# ==================== 启动 ====================
if __name__ == '__main__':
    os.makedirs(DATA_DIR, exist_ok=True)
    os.makedirs(STATIC_DIR, exist_ok=True)
    
    offline_thread = threading.Thread(target=check_offline_devices, daemon=True)
    offline_thread.start()
    
    timer_thread = threading.Thread(target=timer_scheduler, daemon=True)
    timer_thread.start()
    
    print("=" * 50)
    print("  养鱼生态箱 - 远程控制服务器 v2.0")
    print("=" * 50)
    print(f"  HTTP 端口: 7965")
    print(f"  设备WebSocket: ws://<IP>:7965/ws/device")
    print(f"  客户端WebSocket: ws://<IP>:7965/ws/client")
    print(f"  数据目录: {DATA_DIR}")
    print(f"  批量保存间隔: {SAVE_INTERVAL}秒")
    print("=" * 50)
    print("  💡 生产环境推荐:")
    print("     pip install waitress")
    print("     waitress-serve --host=0.0.0.0 --port=7965 --threads=8 main:app")
    print("=" * 50)
    
    # 开发模式使用 Flask 内置服务器
    app.run(host='0.0.0.0', port=7965, debug=False, threaded=True)
