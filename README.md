# 🤖 Minecraft Bedrock AFK Bot

Bot interactivo para mantener activo tu servidor de Minecraft Bedrock Edition.

## 📱 Instalación en Termux (Android)

### 1️⃣ Instalar Termux
Descarga Termux desde [F-Droid](https://f-droid.org/packages/com.termux/) o [GitHub](https://github.com/termux/termux-app/releases)

### 2️⃣ Clonar el proyecto
```bash
# Dar permisos de almacenamiento (opcional)
termux-setup-storage

# Clonar repositorio
git clone <TU_URL_DE_GITHUB>
cd BOT

# Dar permisos de ejecución
chmod +x install.sh start.sh
```

### 3️⃣ Instalar (solo primera vez)
```bash
./install.sh
```

### 4️⃣ Iniciar el bot
```bash
./start.sh
```

## 💻 Uso del Bot

Una vez iniciado, verás un menú con estos comandos:

```
start    - Iniciar el bot
stop     - Detener el bot
config   - Configurar IP, puerto, usuario y contraseña
status   - Ver estado actual del bot
clear    - Limpiar pantalla
exit     - Salir del programa
```

### Ejemplo de uso:
```
> config      (configura tu servidor)
> start       (inicia el bot)
> status      (verifica que esté conectado)
> stop        (detiene el bot)
> exit        (sale del programa)
```

## 🖥️ Instalación en PC/Mac/Linux

### Instalar Node.js
- Windows/Mac: [nodejs.org](https://nodejs.org/)
- Linux: `sudo apt install nodejs npm`

### Instalar dependencias
```bash
npm install
```

### Iniciar
```bash
node bot.js
```

## ⚙️ Configuración

El bot te pedirá:
- **IP del servidor**
- **Puerto**
- **Usuario/Email** (tu cuenta de Microsoft)
- **Contraseña**
- **Modo offline** (s/n)

## 📝 Características

- ✅ Interfaz interactiva con comandos
- ✅ Configuración desde el propio bot
- ✅ Colores en terminal
- ✅ Comandos start/stop
- ✅ Ver estado del bot en tiempo real
- ✅ Funciona en PC, Mac, Linux y Android (Termux)
- ✅ Autenticación con Microsoft Account
- ✅ Soporte para modo offline

## 🔒 Seguridad

**IMPORTANTE:** No subas este repositorio a GitHub con tus credenciales. El archivo `.gitignore` está configurado para proteger información sensible.

## 🆘 Solución de Problemas

### En Termux:
```bash
# Si hay errores de permisos:
chmod +x *.sh

# Si falla la instalación:
pkg update
pkg upgrade
./install.sh
```

### Error de autenticación:
- Verifica que tu email y contraseña sean correctos
- Intenta modo offline si no funciona online

## 🚀 Mantener Bot 24/7 en Termux

### Opción 1: Usar Termux:Boot
```bash
pkg install termux-services
```

### Opción 2: Usar Screen
```bash
pkg install screen
screen -S minecraft
./start.sh
# Presiona Ctrl+A, luego D para salir sin cerrar
# Para volver: screen -r minecraft
```

### Opción 3: Evitar que Termux se cierre
- Adquiere un Termux Wake Lock desde las notificaciones
- Deshabilita optimización de batería para Termux

## 📊 Estado del Proyecto

- ✅ Versión 2.0 - Interfaz interactiva
- ✅ Soporte Termux completo
- ✅ Scripts de instalación automática
- ✅ Comandos en tiempo real

## 📄 Licencia

MIT License - Libre de usar y modificar
