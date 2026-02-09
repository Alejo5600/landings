PRD: Sistema de Hosting de Landings Privadas y Optimizadas
1. Visión General
El objetivo es crear un servidor web ligero que hospede múltiples landing pages independientes. El sistema debe ser "invisible" en su raíz y evitar que terceros o competidores puedan descubrir el listado de las landings existentes. Cada landing será una carpeta autónoma con su propio HTML, CSS, JS y assets.

2. Stack Tecnológico
Lenguaje: Node.js (Runtime).

Framework: Express.js (por su ligereza y control total de rutas).

Hosting: Railway (Despliegue automático vía Git).

Herramientas de Optimización: terser, clean-css-cli, html-minifier.

3. Estructura de Archivos Sugerida
Plaintext
/
├── landings/           # Directorio donde vivirán las carpetas de cada landing
│   ├── landing-1/
│   │   ├── index.html
│   │   ├── style.css
│   │   ├── script.js
│   │   └── assets/     # Imágenes/recursos propios
│   └── landing-2/
├── public/             # Archivos globales (opcional)
├── server.js           # Lógica del servidor Express
├── build.js            # Script de minificación automática
├── 404.html            # Página de error personalizada
├── package.json
└── .gitignore
4. Requisitos Funcionales
A. Enrutamiento (Routing) Dinámico
Raíz (/): Si un usuario accede a la raíz del dominio, el servidor debe retornar un código 404 con el archivo 404.html. No debe haber página de inicio.

Landings (/nombre-landing): El servidor debe buscar automáticamente la carpeta correspondiente dentro de /landings/.

Si existe /landings/ejemplo/index.html, debe servirse en dominio.com/ejemplo.

Manejo de Errores: Cualquier ruta no existente o intento de acceso a carpetas internas debe devolver el 404.html.

B. Privacidad y Seguridad
Bloqueo de Directorios: El servidor tiene estrictamente prohibido mostrar el listado de archivos (Directory Listing).

Anti-Discovery: No se debe generar ningún archivo sitemap.xml ni robots.txt que liste las rutas de las landings.

Headers de Seguridad: Configurar headers para evitar el rastreo si es necesario (opcional, pero recomendado).

C. Pipeline de Optimización (Build Step)
El sistema debe incluir un script (npm run build) que:

Recorra cada carpeta en /landings.

Minifique los archivos .html, .css y .js para reducir el peso.

El resultado optimizado es lo que Railway servirá en producción.

5. Instrucciones para Cursor (Prompt de Implementación)
"Cursor, actúa como un experto en Backend y DevOps. Basándote en el PRD anterior, ejecuta las siguientes tareas:

Crea un servidor Express en server.js que gestione las rutas según lo descrito (Raíz = 404, /nombre = carpeta en /landings).

Configura el middleware necesario para bloquear el listado de directorios.

Crea una página 404.html minimalista y profesional.

Configura un archivo build.js que utilice herramientas de minificación para procesar las landings antes del despliegue.

Configura el package.json con los scripts necesarios para Railway (start y build).

Crea una landing de ejemplo en /landings/test-page con HTML/CSS/JS básicos para probar el sistema."

6. Módulo de Evaluación de Landings (Post-Despliegue)
Para cumplir con tu requerimiento de optimización manual, he incluido este checklist que Cursor debe ejecutar cuando le pidas revisar una landing terminada:

Comando para Cursor: "Cursor, analiza la carpeta /landings/[nombre] y evalúa:

¿Hay imágenes que superen los 200kb y podrían convertirse a WebP?

¿El CSS tiene reglas duplicadas o no utilizadas?

¿El HTML tiene metatags básicos de carga rápida?

¿Falta algún atributo 'alt' en las imágenes que afecte el rendimiento?"