#!/bin/bash
# ===========================================================
# 养鱼系统服务器管理脚本
# 用法: ./fish-server.sh {start|stop|restart|status}
# ===========================================================

APP_DIR="$(cd "$(dirname "$0")" && pwd)"
APP_NAME="main.py"
PID_FILE="/var/run/fish-server.pid"
LOG_FILE="$APP_DIR/fish-server.log"
PYTHON="python3"

# 检查必要依赖
check_deps() {
    if ! command -v $PYTHON &> /dev/null; then
        echo "错误: 未找到 $PYTHON"
        exit 1
    fi
}

start() {
    check_deps

    if [ -f "$PID_FILE" ]; then
        pid=$(cat "$PID_FILE" 2>/dev/null)
        if [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null; then
            echo "服务器已在运行中 (PID: $pid)"
            exit 1
        else
            rm -f "$PID_FILE"
        fi
    fi

    cd "$APP_DIR" || exit 1

    nohup $PYTHON "$APP_NAME" > "$LOG_FILE" 2>&1 &
    pid=$!
    echo $pid > "$PID_FILE"

    # 等待确认启动
    sleep 2
    if kill -0 "$pid" 2>/dev/null; then
        echo "服务器已启动 (PID: $pid)"
    else
        echo "启动失败，查看日志: $LOG_FILE"
        rm -f "$PID_FILE"
        exit 1
    fi
}

stop() {
    if [ ! -f "$PID_FILE" ]; then
        echo "服务器未运行 (无PID文件)"
        exit 1
    fi

    pid=$(cat "$PID_FILE" 2>/dev/null)
    if [ -z "$pid" ]; then
        rm -f "$PID_FILE"
        echo "服务器未运行"
        exit 1
    fi

    echo "停止服务器 (PID: $pid)..."
    kill "$pid" 2>/dev/null

    # 等待进程退出
    for i in $(seq 1 5); do
        if ! kill -0 "$pid" 2>/dev/null; then
            break
        fi
        sleep 1
    done

    # 强制终止
    if kill -0 "$pid" 2>/dev/null; then
        echo "强制终止..."
        kill -9 "$pid" 2>/dev/null
        sleep 1
    fi

    rm -f "$PID_FILE"
    echo "服务器已停止"
}

restart() {
    echo "重启服务器..."
    stop
    sleep 1
    start
}

status() {
    if [ -f "$PID_FILE" ]; then
        pid=$(cat "$PID_FILE" 2>/dev/null)
        if [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null; then
            uptime=$(ps -o etime= -p "$pid" 2>/dev/null | tr -d ' ')
            mem=$(ps -o %mem= -p "$pid" 2>/dev/null | tr -d ' ')
            cpu=$(ps -o %cpu= -p "$pid" 2>/dev/null | tr -d ' ')
            echo "========================================"
            echo "  服务器状态: 运行中 ✅"
            echo "  PID:       $pid"
            echo "  运行时间:  $uptime"
            echo "  内存占用:  $mem%"
            echo "  CPU占用:   $cpu%"
            echo "  日志文件:  $LOG_FILE"
            echo "========================================"
        else
            echo "PID文件存在但进程不存在 (可能异常退出)"
            rm -f "$PID_FILE"
            exit 1
        fi
    else
        echo "========================================"
        echo "  服务器状态: 未运行 ❌"
        echo "========================================"
    fi
}

case "${1:-status}" in
    start)
        start
        ;;
    stop)
        stop
        ;;
    restart)
        restart
        ;;
    status)
        status
        ;;
    *)
        echo "用法: $0 {start|stop|restart|status}"
        exit 1
        ;;
esac
