#!/data/data/com.termux/files/usr/bin/bash

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;36m'
NC='\033[0m' # No Color

echo -e "${BLUE}═══════════════════════════════════════${NC}"
echo -e "${BLUE}  🤖 Instalador de Minecraft AFK Bot${NC}"
echo -e "${BLUE}═══════════════════════════════════════${NC}"
echo ""

# Actualizar paquetes
echo -e "${YELLOW}📦 Actualizando Termux...${NC}"
pkg update -y
echo ""

# Instalar Node.js
echo -e "${YELLOW}📦 Instalando Node.js...${NC}"
pkg install nodejs -y
echo ""

# Instalar Git
echo -e "${YELLOW}📦 Instalando Git...${NC}"
pkg install git -y
echo ""

# Verificar instalación
if command -v node &> /dev/null; then
    echo -e "${GREEN}✓ Node.js instalado correctamente${NC}"
    node --version
else
    echo -e "${RED}✗ Error al instalar Node.js${NC}"
    exit 1
fi

if command -v npm &> /dev/null; then
    echo -e "${GREEN}✓ NPM instalado correctamente${NC}"
    npm --version
else
    echo -e "${RED}✗ Error al instalar NPM${NC}"
    exit 1
fi

echo ""
echo -e "${YELLOW}📦 Instalando dependencias del bot...${NC}"
npm install
echo ""

if [ $? -eq 0 ]; then
    echo -e "${GREEN}═══════════════════════════════════════${NC}"
    echo -e "${GREEN}  ✓ Instalación completada!${NC}"
    echo -e "${GREEN}═══════════════════════════════════════${NC}"
    echo ""
    echo -e "${BLUE}Para iniciar el bot ejecuta:${NC}"
    echo -e "${YELLOW}  ./start.sh${NC}"
    echo -e "${BLUE}o${NC}"
    echo -e "${YELLOW}  node bot.js${NC}"
    echo ""
else
    echo -e "${RED}✗ Error durante la instalación${NC}"
    exit 1
fi
