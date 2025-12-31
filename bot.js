const bedrock = require('bedrock-protocol');
const readline = require('readline');

// Configuración por defecto
let config = {
  host: '67.213.214.179',
  port: 10400,
  username: 'alobaridilpas@gmail.com',
  password: 'Platicamos1000.',
  offline: false
};

let client = null;
let isRunning = false;

// Interfaz para comandos
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Colores para terminal
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[36m',
  magenta: '\x1b[35m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

function showMenu() {
  console.clear();
  log('═══════════════════════════════════════', 'blue');
  log('  🤖 MINECRAFT BEDROCK AFK BOT', 'magenta');
  log('═══════════════════════════════════════', 'blue');
  console.log('');
  log('Comandos disponibles:', 'yellow');
  console.log('  start    - Iniciar el bot');
  console.log('  stop     - Detener el bot');
  console.log('  config   - Configurar servidor');
  console.log('  status   - Ver estado del bot');
  console.log('  clear    - Limpiar pantalla');
  console.log('  exit     - Salir del programa');
  console.log('');
  log('═══════════════════════════════════════', 'blue');
}

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function configureServer() {
  log('\n📝 Configuración del Servidor', 'yellow');
  log('═══════════════════════════════════════', 'blue');
  
  const host = await askQuestion(`IP del servidor [${config.host}]: `);
  if (host.trim()) config.host = host.trim();
  
  const port = await askQuestion(`Puerto [${config.port}]: `);
  if (port.trim()) config.port = parseInt(port.trim());
  
  const username = await askQuestion(`Usuario/Email [${config.username}]: `);
  if (username.trim()) config.username = username.trim();
  
  const password = await askQuestion(`Contraseña: `);
  if (password.trim()) config.password = password.trim();
  
  const mode = await askQuestion(`¿Modo offline? (s/n) [n]: `);
  config.offline = mode.toLowerCase() === 's';
  
  log('\n✓ Configuración guardada!', 'green');
  log(`  Servidor: ${config.host}:${config.port}`, 'blue');
  log(`  Usuario: ${config.username}`, 'blue');
  log(`  Modo: ${config.offline ? 'Offline' : 'Online'}`, 'blue');
  console.log('');
}

function connectBot() {
  if (isRunning) {
    log('⚠ El bot ya está corriendo!', 'yellow');
    return;
  }
  
  log('\n🚀 Iniciando bot...', 'yellow');
  log(`📡 Conectando a ${config.host}:${config.port}`, 'blue');
  
  try {
    client = bedrock.createClient({
      host: config.host,
      port: config.port,
      username: config.username,
      offline: config.offline,
      ...((!config.offline) && {
        authTitle: '00000000441cc96b',
        flow: 'live'
      })
    });
    
    client.on('join', () => {
      isRunning = true;
      log('✓ Bot conectado exitosamente!', 'green');
      log('💚 Manteniendo el servidor activo...', 'green');
    });
    
    client.on('spawn', () => {
      log('✓ Bot spawneado en el mundo', 'green');
    });
    
    client.on('text', (packet) => {
      if (packet.message) {
        log(`[Chat] ${packet.message}`, 'blue');
      }
    });
    
    client.on('disconnect', (packet) => {
      isRunning = false;
      log('✗ Bot desconectado', 'red');
      if (packet.message) {
        log(`Razón: ${packet.message}`, 'yellow');
      }
    });
    
    client.on('error', (error) => {
      log(`❌ Error: ${error.message}`, 'red');
    });
    
  } catch (error) {
    log(`❌ Error al conectar: ${error.message}`, 'red');
    isRunning = false;
  }
}

function stopBot() {
  if (!isRunning || !client) {
    log('⚠ El bot no está corriendo', 'yellow');
    return;
  }
  
  log('\n🛑 Deteniendo bot...', 'yellow');
  client.close();
  client = null;
  isRunning = false;
  log('✓ Bot detenido', 'green');
}

function showStatus() {
  log('\n📊 Estado del Bot', 'yellow');
  log('═══════════════════════════════════════', 'blue');
  log(`Estado: ${isRunning ? '🟢 ACTIVO' : '🔴 DETENIDO'}`, isRunning ? 'green' : 'red');
  log(`Servidor: ${config.host}:${config.port}`, 'blue');
  log(`Usuario: ${config.username}`, 'blue');
  log(`Modo: ${config.offline ? 'Offline' : 'Online'}`, 'blue');
  log('═══════════════════════════════════════', 'blue');
  console.log('');
}

async function handleCommand(cmd) {
  const command = cmd.trim().toLowerCase();
  
  switch (command) {
    case 'start':
      connectBot();
      break;
    case 'stop':
      stopBot();
      break;
    case 'config':
      await configureServer();
      break;
    case 'status':
      showStatus();
      break;
    case 'clear':
      console.clear();
      showMenu();
      break;
    case 'exit':
      if (isRunning) {
        stopBot();
      }
      log('\n👋 Hasta luego!', 'magenta');
      process.exit(0);
      break;
    case 'help':
      showMenu();
      break;
    default:
      if (command) {
        log(`❌ Comando desconocido: ${command}`, 'red');
        log('Escribe "help" para ver los comandos disponibles', 'yellow');
      }
  }
}

async function main() {
  showMenu();
  
  log('Escribe un comando o "help" para ayuda\n', 'yellow');
  
  rl.on('line', async (input) => {
    await handleCommand(input);
    rl.prompt();
  });
  
  rl.setPrompt('> ');
  rl.prompt();
}

// Manejo de cierre
process.on('SIGINT', () => {
  log('\n\n🛑 Cerrando programa...', 'yellow');
  if (isRunning) {
    stopBot();
  }
  process.exit(0);
});

// Iniciar
main();
