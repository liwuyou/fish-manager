#!/bin/bash
# ===========================================================
# 养鱼系统服务器 - 首次配置启动脚本
# 用法: sudo bash setup.sh
# 说明: 将当前目录文件部署到 /opt/fish-tank-server，
#       安装依赖，注册 systemd 服务，启动服务器。
#       可重复运行，不会重复复制和重复安装。
# ===========================================================

set -e

# ---- 颜色输出 ----
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

info()  { echo -e "${BLUE}[INFO]${NC} $1"; }
ok()    { echo -e "${GREEN}[OK]${NC} $1"; }
warn()  { echo -e "${YELLOW}[WARN]${NC} $1"; }
err()   { echo -e "${RED}[ERROR]${NC} $1"; }

# ---- 检查 root 权限 ----
if [ "$EUID" -ne 0 ]; then
    err "请使用 sudo 运行: sudo bash setup.sh"
    exit 1
fi

# ---- 变量定义 ----
SOURCE_DIR="$(cd "$(dirname "$0")" && pwd)"
TARGET_DIR="/opt/fish-tank-server"
SERVICE_NAME="fish-server"
SERVICE_FILE="/etc/systemd/system/${SERVICE_NAME}.service"
PID_FILE="/var/run/fish-server.pid"
REQUIREMENTS="$SOURCE_DIR/requirements.txt"

echo ""
echo "============================================"
echo "  养鱼系统服务器 - 部署安装"
echo "============================================"
echo ""
info "源目录: $SOURCE_DIR"
info "目标目录: $TARGET_DIR"
echo ""

# =========================================================
# 第1步: 检查依赖软件
# =========================================================
info "检查系统依赖..."

NEEDS_PYTHON=false
NEEDS_PIP=false

if ! command -v python3 &> /dev/null; then
    warn "python3 未安装，将自动安装"
    NEEDS_PYTHON=true
fi

if ! command -v pip3 &> /dev/null; then
    warn "pip3 未安装，将自动安装"
    NEEDS_PIP=true
fi

if [ "$NEEDS_PYTHON" = true ] || [ "$NEEDS_PIP" = true ]; then
    info "安装 python3 和 pip3..."
    apt-get update -qq
    if [ "$NEEDS_PYTHON" = true ]; then
        apt-get install -y -qq python3
    fi
    if [ "$NEEDS_PIP" = true ]; then
        apt-get install -y -qq python3-pip
    fi
    ok "系统依赖安装完成"
else
    ok "系统依赖已就绪"
fi

# =========================================================
# 第2步: 创建目标目录并复制文件
# =========================================================
info "部署程序文件..."

if [ ! -d "$TARGET_DIR" ]; then
    mkdir -p "$TARGET_DIR"
    info "创建目录: $TARGET_DIR"
fi

# 需要复制的文件列表
FILES_TO_COPY=(
    "main.py"
    "fish-server.sh"
    "requirements.txt"
    "data/"
    "static/"
)

for item in "${FILES_TO_COPY[@]}"; do
    src="$SOURCE_DIR/$item"
    if [ -e "$src" ]; then
        if [ -d "$src" ]; then
            # 目录: 使用 rsync 或 cp -r
            if command -v rsync &> /dev/null; then
                rsync -a --delete "$src" "$TARGET_DIR/"
            else
                cp -r "$src" "$TARGET_DIR/"
            fi
        else
            cp "$src" "$TARGET_DIR/"
        fi
        ok "复制: $item"
    else
        warn "跳过(不存在): $item"
    fi
done

# =========================================================
# 第3步: 设置权限
# =========================================================
info "设置权限..."

chmod +x "$TARGET_DIR/fish-server.sh"
ok "fish-server.sh 设为可执行"

chmod -R 755 "$TARGET_DIR"

# =========================================================
# 第4步: 安装 Python 依赖
# =========================================================
info "安装 Python 依赖..."

if [ -f "$REQUIREMENTS" ]; then
    # 使用 --exists-action i 跳过已安装的包
    pip3 install --exists-action i -r "$REQUIREMENTS" -q
    ok "Python 依赖已安装"
else
    warn "未找到 requirements.txt，手动安装基础依赖"
    pip3 install flask flask-sock waitress -q
    ok "基础依赖已安装"
fi

# =========================================================
# 第5步: 注册 systemd 服务
# =========================================================
info "注册 systemd 服务..."

if [ -f "$SERVICE_FILE" ]; then
    warn "服务文件已存在 ($SERVICE_FILE)，将覆盖更新"
fi

cp "$SOURCE_DIR/fish-server.service" "$SERVICE_FILE"
chmod 644 "$SERVICE_FILE"
ok "systemd 服务已注册"

# 重新加载 systemd
systemctl daemon-reload
ok "systemd 配置已重载"

# =========================================================
# 第6步: 清理旧的 PID 文件
# =========================================================
if [ -f "$PID_FILE" ]; then
    old_pid=$(cat "$PID_FILE" 2>/dev/null)
    if [ -n "$old_pid" ] && ! kill -0 "$old_pid" 2>/dev/null; then
        rm -f "$PID_FILE"
        info "清理残留的 PID 文件"
    fi
fi

# =========================================================
# 第7步: 启用并启动服务
# =========================================================
info "配置开机自启..."
systemctl enable "$SERVICE_NAME" 2>/dev/null
ok "开机自启已启用"

info "启动服务器..."
systemctl restart "$SERVICE_NAME" 2>/dev/null
sleep 2

# 检查启动状态
if systemctl is-active --quiet "$SERVICE_NAME"; then
    ok "服务器已成功启动 ✅"
else
    err "服务器启动失败，查看日志: journalctl -u $SERVICE_NAME -n 50 --no-pager"
    exit 1
fi

# =========================================================
# 完成
# =========================================================
echo ""
echo "============================================"
echo "  部署完成 ✅"
echo "============================================"
echo ""
echo "  管理命令:"
echo "    sudo systemctl status $SERVICE_NAME    查看状态"
echo "    sudo systemctl stop $SERVICE_NAME      停止"
echo "    sudo systemctl start $SERVICE_NAME     启动"
echo "    sudo systemctl restart $SERVICE_NAME   重启"
echo "    sudo journalctl -u $SERVICE_NAME -f    查看日志"
echo ""
echo "  版本升级（重新执行本脚本即可）:"
echo "    cd $SOURCE_DIR"
echo "    git pull"
echo "    sudo bash setup.sh"
echo ""
echo "============================================"
