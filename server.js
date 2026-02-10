require('dotenv').config();
const express = require('express');
const path = require('path');
const fs = require('fs');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// Habilitar compresión gzip
app.use(compression());

// Deshabilitar el listado de directorios
app.use((req, res, next) => {
  // Bloquear cualquier intento de listar directorios
  if (req.path.endsWith('/') && req.path !== '/') {
    return res.status(404).sendFile(path.join(__dirname, '404.html'));
  }
  next();
});

// Headers de seguridad
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'no-referrer');
  next();
});

// Ruta raíz: siempre devolver 404
app.get('/', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Servir archivos estáticos desde las carpetas de landings (CSS, JS, imágenes, etc.)
app.use('/:landingName', (req, res, next) => {
  const landingName = req.params.landingName;
  
  // Validar que el nombre de la landing no contenga caracteres peligrosos
  if (landingName.includes('..') || landingName.includes('/') || landingName.includes('\\')) {
    return res.status(404).sendFile(path.join(__dirname, '404.html'));
  }
  
  const landingPath = path.join(__dirname, 'landings', landingName);
  
  // Si es una solicitud a index.html, manejarla en el siguiente middleware
  if (req.path === '/' || req.path === '/index.html') {
    return next();
  }
  
  // Servir archivos estáticos de la landing específica
  const filePath = path.join(landingPath, req.path);
  
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    res.sendFile(filePath);
  } else {
    next();
  }
});

// Enrutamiento dinámico para landings (index.html)
app.get('/:landingName', (req, res) => {
  const landingName = req.params.landingName;
  
  // Validar que el nombre de la landing no contenga caracteres peligrosos
  if (landingName.includes('..') || landingName.includes('/') || landingName.includes('\\')) {
    return res.status(404).sendFile(path.join(__dirname, '404.html'));
  }
  
  const landingPath = path.join(__dirname, 'landings', landingName);
  const indexPath = path.join(landingPath, 'index.html');
  
  // Verificar si existe la carpeta y el index.html
  if (fs.existsSync(landingPath) && fs.statSync(landingPath).isDirectory()) {
    if (fs.existsSync(indexPath)) {
      // Leer el HTML y reemplazar variables de entorno
      let html = fs.readFileSync(indexPath, 'utf8');
      
      // Reemplazar placeholders con variables de entorno
      const replacements = {
        '{{META_PIXEL_ID}}': process.env.META_PIXEL_ID || '',
        '{{HOTMART_PRODUCT_ID}}': process.env.HOTMART_PRODUCT_ID || '',
      };
      
      Object.keys(replacements).forEach(placeholder => {
        html = html.replace(new RegExp(placeholder.replace(/[{}]/g, '\\$&'), 'g'), replacements[placeholder]);
      });
      
      res.send(html);
    } else {
      // Si la carpeta existe pero no tiene index.html, devolver 404
      res.status(404).sendFile(path.join(__dirname, '404.html'));
    }
  } else {
    // Si no existe la landing, devolver 404
    res.status(404).sendFile(path.join(__dirname, '404.html'));
  }
});

// Manejo de errores: cualquier ruta no manejada devuelve 404
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
