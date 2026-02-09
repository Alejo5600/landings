const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const landingsDir = path.join(__dirname, 'landings');

// Verificar que existe el directorio de landings
if (!fs.existsSync(landingsDir)) {
  console.log('Directorio landings/ no existe. Creándolo...');
  fs.mkdirSync(landingsDir, { recursive: true });
  console.log('✓ Directorio landings/ creado');
  process.exit(0);
}

// Función para minificar HTML
function minifyHTML(filePath) {
  try {
    const html = fs.readFileSync(filePath, 'utf8');
    const minified = require('html-minifier').minify(html, {
      removeComments: true,
      collapseWhitespace: true,
      removeRedundantAttributes: true,
      useShortDoctype: true,
      removeEmptyAttributes: true,
      minifyCSS: true,
      minifyJS: true,
      removeAttributeQuotes: true,
      removeOptionalTags: true
    });
    fs.writeFileSync(filePath, minified);
    return true;
  } catch (error) {
    console.error(`Error minificando HTML ${filePath}:`, error.message);
    return false;
  }
}

// Función para minificar CSS
function minifyCSS(filePath) {
  try {
    const outputPath = filePath;
    execSync(`npx clean-css-cli -o "${outputPath}" "${filePath}"`, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`Error minificando CSS ${filePath}:`, error.message);
    return false;
  }
}

// Función para minificar JS
function minifyJS(filePath) {
  try {
    const outputPath = filePath;
    execSync(`npx terser "${filePath}" -o "${outputPath}" --compress --mangle`, { stdio: 'inherit' });
    return true;
  } catch (error) {
    console.error(`Error minificando JS ${filePath}:`, error.message);
    return false;
  }
}

// Función para procesar un archivo
function processFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  
  if (ext === '.html') {
    console.log(`Minificando HTML: ${filePath}`);
    return minifyHTML(filePath);
  } else if (ext === '.css') {
    console.log(`Minificando CSS: ${filePath}`);
    return minifyCSS(filePath);
  } else if (ext === '.js') {
    console.log(`Minificando JS: ${filePath}`);
    return minifyJS(filePath);
  }
  
  return false;
}

// Función recursiva para procesar directorios
function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    
    if (entry.isDirectory()) {
      // Ignorar node_modules y otros directorios especiales
      if (entry.name === 'node_modules' || entry.name.startsWith('.')) {
        continue;
      }
      processDirectory(fullPath);
    } else if (entry.isFile()) {
      processFile(fullPath);
    }
  }
}

// Procesar todas las landings
console.log('🚀 Iniciando proceso de minificación...\n');

const landings = fs.readdirSync(landingsDir, { withFileTypes: true })
  .filter(entry => entry.isDirectory())
  .map(entry => entry.name);

if (landings.length === 0) {
  console.log('⚠ No se encontraron landings para procesar.');
  process.exit(0);
}

console.log(`📦 Procesando ${landings.length} landing(s)...\n`);

landings.forEach(landing => {
  console.log(`\n📁 Procesando: ${landing}`);
  const landingPath = path.join(landingsDir, landing);
  processDirectory(landingPath);
  console.log(`✓ ${landing} procesada`);
});

console.log('\n✨ Minificación completada exitosamente!');
