import socket
import platform
import subprocess
import re

def get_local_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except:
        return "127.0.0.1"

def get_wifi_info():
    info = {}
    system = platform.system()
    
    if system == "Windows":
        try:
            result = subprocess.run(["netsh", "wlan", "show", "interfaces"], 
                                  capture_output=True, text=True, encoding='gbk')
            output = result.stdout
            
            ssid_match = re.search(r'SSID\s*:\s*(.+)', output)
            if ssid_match:
                info['ssid'] = ssid_match.group(1).strip()
            
            state_match = re.search(r'状态\s*:\s*(.+)', output)
            if state_match:
                info['state'] = state_match.group(1).strip()
                
            signal_match = re.search(r'信号\s*:\s*(.+)', output)
            if signal_match:
                info['signal'] = signal_match.group(1).strip()
                
        except Exception as e:
            info['error'] = str(e)
    
    info['ip'] = get_local_ip()
    info['hostname'] = socket.gethostname()
    return info

def check_port(port):
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    result = sock.connect_ex(('0.0.0.0', port))
    sock.close()
    return result == 0

if __name__ == "__main__":
    print("=" * 50)
    print("  网络状态检测工具")
    print("=" * 50)
    
    wifi = get_wifi_info()
    print(f"\n主机名: {wifi.get('hostname', 'N/A')}")
    print(f"本机IP: {wifi.get('ip', 'N/A')}")
    
    if 'ssid' in wifi:
        print(f"WiFi名称: {wifi['ssid']}")
        print(f"连接状态: {wifi.get('state', 'N/A')}")
        print(f"信号强度: {wifi.get('signal', 'N/A')}")
    
    print(f"\n常用端口检测:")
    ports = [80, 8080, 5000, 8765]
    for port in ports:
        status = "已占用" if check_port(port) else "空闲"
        print(f"  端口 {port}: {status}")
    
    print("\n" + "=" * 50)
    print(f"  建议服务器地址: ws://{wifi.get('ip', '127.0.0.1')}:8765")
    print("=" * 50)
