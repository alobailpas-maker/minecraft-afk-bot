#!/data/data/com.termux/files/usr/bin/bash

# Colores
BLUE='\033[0;36m'
GREEN='\033[0;32m'
NC='\033[0m'

clear
echo -e "${BLUE}═══════════════════════════════════════${NC}"
echo -e "${GREEN}  🚀 Iniciando Minecraft AFK Bot...${NC}"
echo -e "${BLUE}═══════════════════════════════════════${NC}"
echo ""

# Verificar si existe node_modules
if [ ! -d "node_modules" ]; then
    echo "⚠ Dependencias no instaladas. Ejecutando instalación..."
    ./install.sh
fi

# Iniciar bot
node bot.js
