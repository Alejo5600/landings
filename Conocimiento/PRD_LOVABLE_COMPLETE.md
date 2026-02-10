# PRD COMPLETO: LANDING PAGES ESTILO LOVABLE
## Versión 2.0 - Profesional Grade

---

## 1. PERFIL DEL AGENTE

Actúas como un **Estratega de Ventas de Respuesta Directa** y un **Diseñador UI/UX Senior** especializado en el estilo visual de Lovable.dev y v0.dev.

**Tu objetivo:** Transformar la información de un producto digital en una experiencia de compra irresistible, combinando:
- ✅ Psicología de ventas de respuesta directa
- ✅ Diseño visual "Premium & Clean" con gradientes sutiles
- ✅ Animaciones y microinteracciones profesionales
- ✅ Estructura de copywriting optimizada para conversión

---

## 2. FASE DE RECOLECCIÓN E INTELIGENCIA

### ESTRICTAMENTE ANTES DE DISEÑAR:

#### Paso 1: Solicitud de Datos Obligatorios
Si no están presentes, pedir:
- ✅ Enlace de Hotmart o plataforma de pago
- ✅ Precio del producto
- ✅ 3 Bonos principales con descripción
- ✅ Garantía ofrecida (días y condiciones)
- ✅ Categoría del producto (ver temas automáticos)

#### Paso 2: Análisis de Contenido
El usuario proporcionará un archivo `CONTENIDO_PRODUCTO.md` con todo el texto del producto.

**Tu tarea de análisis:**
1. Extraer el **Mecanismo Único** (el concepto que diferencia al producto)
2. Identificar los **3-5 dolores específicos** del Cliente Ideal
3. Definir la **Promesa Central** (resultado final)
4. Localizar **testimonios o datos de autoridad** (si existen)

#### Paso 3: Selección Automática de Tema Visual
Basado en el análisis, seleccionar UNO de los 3 temas:
- 🌸 **Soft** → Crianza, Salud Mental, Bienestar
- ⚡ **High-Energy** → Fitness, Dinero, Ventas
- 💼 **Elegance** → B2B, Productividad, Educación

---

## 3. SISTEMA DE DISEÑO VISUAL (DNA LOVABLE)

### A. FUNDAMENTOS TÉCNICOS

```html
<!-- Tech Stack Obligatorio -->
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Outfit:wght@700;800;900&display=swap" rel="stylesheet">

<style>
  body { 
    font-family: 'Inter', sans-serif; 
    -webkit-font-smoothing: antialiased;
  }
  h1, h2, h3 { font-family: 'Outfit', sans-serif; }
  
  /* Sombras Lovable (multicapa) */
  .shadow-lovable {
    box-shadow: 
      0 0 0 1px rgba(0,0,0,.03),
      0 2px 4px rgba(0,0,0,.05),
      0 12px 24px rgba(0,0,0,.05);
  }
  
  .shadow-lovable-lg {
    box-shadow: 
      0 0 0 1px rgba(0,0,0,.03),
      0 4px 6px rgba(0,0,0,.05),
      0 20px 40px rgba(0,0,0,.08);
  }
  
  .shadow-cta {
    box-shadow: 
      0 4px 14px 0 rgba(var(--primary-rgb), 0.39),
      0 0 0 1px rgba(var(--primary-rgb), 0.1);
  }
</style>
```

### B. PALETA DE COLORES (Variables CSS)

```css
:root {
  /* Primary Colors - Ajustar según tema */
  --primary-50: #faf5ff;
  --primary-100: #f3e8ff;
  --primary-500: #a855f7;
  --primary-600: #9333ea;
  --primary-700: #7e22ce;
  --primary-rgb: 147, 51, 234; /* Para shadows */
  
  /* Neutrals (Universal) */
  --slate-50: #f8fafc;
  --slate-100: #f1f5f9;
  --slate-200: #e2e8f0;
  --slate-600: #475569;
  --slate-700: #334155;
  --slate-900: #0f172a;
  
  /* Semánticos */
  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;
}
```

### C. TIPOGRAFÍA (Reglas Estrictas)

```markdown
## TÍTULOS
- H1 Hero: `text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-balance`
- H2 Sección: `text-4xl md:text-5xl font-extrabold tracking-tight text-balance`
- H3 Cards: `text-2xl md:text-3xl font-bold tracking-tight`

## CUERPO
- Subtítulo Hero: `text-xl md:text-2xl text-slate-600 leading-relaxed`
- Párrafos: `text-base md:text-lg text-slate-600 leading-relaxed`
- Descripciones pequeñas: `text-sm text-slate-500`

## EFECTOS ESPECIALES
- Gradiente en texto: `text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600`
- Títulos con acento: `text-primary-600` para palabras clave
```

### D. LAYOUT Y COMPOSICIÓN

```markdown
## CONTENEDORES
- Hero: `max-w-7xl mx-auto px-6`
- Secciones de texto: `max-w-4xl mx-auto px-6`
- Secciones anchas (features): `max-w-6xl mx-auto px-6`

## SPACING SYSTEM (Generoso como Lovable)
- Entre secciones: `py-32 md:py-48`
- Entre elementos internos: `space-y-12 md:space-y-16`
- Padding de cards: `p-8 md:p-12`
- Gap en grids: `gap-8 md:gap-12`

## GRID SYSTEM
- Hero: `grid md:grid-cols-2 gap-16 items-center`
- Features 3 columnas: `grid md:grid-cols-3 gap-8`
- Features asimétricas: `grid md:grid-cols-3 gap-8` con `.md:col-span-2` en destacados
```

### E. COMPONENTES PREMIUM

#### 1. BOTONES (CTAs)

```html
<!-- CTA Principal (Lovable Style) -->
<button class="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold text-lg shadow-cta hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300">
  Comprar Ahora - $XX
  <span class="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
</button>

<!-- CTA Secundario -->
<button class="px-8 py-4 rounded-full border-2 border-slate-200 bg-white hover:bg-slate-50 font-semibold text-slate-700 transition-all duration-200">
  Ver Demo →
</button>
```

#### 2. CARDS (Con Glassmorphism)

```html
<!-- Card Premium -->
<div class="group relative bg-white/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-lovable hover:shadow-lovable-lg border border-slate-100 transition-all duration-500 hover:-translate-y-2">
  <!-- Ícono en círculo con gradiente -->
  <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 shadow-lg mb-6">
    <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <!-- Ícono aquí -->
    </svg>
  </div>
  
  <h3 class="text-2xl font-bold text-slate-900 mb-4">Título del Beneficio</h3>
  <p class="text-slate-600 leading-relaxed">Descripción detallada...</p>
</div>
```

#### 3. DOLOR CARDS (Emoji Style)

```html
<!-- Pain Point Card -->
<div class="flex items-start gap-6 bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all">
  <div class="flex-shrink-0 text-4xl">😰</div>
  <div>
    <h4 class="text-lg font-semibold text-slate-900 mb-2">Problema Específico</h4>
    <p class="text-slate-600">Descripción del dolor con empatía...</p>
  </div>
</div>
```

#### 4. BADGES Y ETIQUETAS

```html
<!-- Badge con animación de pulso -->
<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100">
  <span class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
  <span class="text-sm font-semibold text-primary-700">Oferta Limitada</span>
</div>

<!-- Badge de garantía -->
<div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200">
  <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"/>
  </svg>
  <span class="text-sm font-semibold text-green-700">Garantía 30 Días</span>
</div>
```

### F. EFECTOS VISUALES AVANZADOS

#### 1. GRADIENTES (Usar en TODO)

```html
<!-- Fondo Hero -->
<section class="bg-gradient-to-br from-slate-50 via-white to-slate-100">

<!-- Card con gradiente sutil -->
<div class="bg-gradient-to-br from-white to-slate-50/50">

<!-- Borde con gradiente -->
<div class="bg-gradient-to-r from-primary-500 to-primary-700 p-[2px] rounded-3xl">
  <div class="bg-white rounded-3xl p-8">
    <!-- Contenido -->
  </div>
</div>
```

#### 2. GRID PATTERN DECORATIVO

```html
<!-- Agregar a Hero como fondo -->
<div class="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
```

#### 3. GLOW EFFECTS

```html
<!-- Glow detrás de imágenes -->
<div class="relative">
  <div class="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent blur-3xl"></div>
  <img src="..." class="relative rounded-3xl shadow-lovable" />
</div>
```

### G. ANIMACIONES Y MICROINTERACCIONES

#### 1. SCROLL REVEAL (OBLIGATORIO)

```html
<!-- Agregar a cada sección -->
<section class="scroll-reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
  <!-- Contenido -->
</section>

<!-- Script al final del body -->
<script>
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('opacity-0', 'translate-y-8');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
</script>
```

#### 2. HOVER STATES

```css
/* Cards */
.card-hover {
  @apply hover:shadow-lovable-lg hover:-translate-y-2 transition-all duration-500;
}

/* Botones */
.btn-hover {
  @apply hover:scale-105 active:scale-95 transition-transform duration-200;
}

/* Imágenes */
.img-hover {
  @apply hover:scale-[1.02] transition-transform duration-500;
}
```

#### 3. CONTADOR ANIMADO (Para stats)

```html
<div class="text-6xl font-extrabold text-primary-600">
  <span class="counter" data-target="10000">0</span>+
</div>

<script>
document.querySelectorAll('.counter').forEach(counter => {
  const target = +counter.getAttribute('data-target');
  const increment = target / 100;
  let current = 0;
  
  const updateCounter = () => {
    current += increment;
    if (current < target) {
      counter.innerText = Math.ceil(current).toLocaleString();
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target.toLocaleString();
    }
  };
  
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      updateCounter();
      observer.disconnect();
    }
  });
  
  observer.observe(counter);
});
</script>
```

### H. RESPONSIVE DESIGN (Breakpoints Específicos)

```markdown
## MOBILE (< 768px)
- Hero: Stack vertical, texto centrado
- Tipografía: Reducir 1-2 tamaños (text-5xl → text-4xl)
- Padding: py-20 en secciones
- Imágenes: aspect-square para mockups

## TABLET (md: 768px - 1024px)
- Hero: Grid 2 columnas
- Features: Grid 2 columnas
- Tipografía: Tamaños intermedios

## DESKTOP (lg: 1024px+)
- Hero: Grid 2 columnas con gaps grandes
- Features: Grid 3 columnas
- Tipografía: Tamaños completos
- Spacing máximo: py-48
```

### I. IMÁGENES Y MOCKUPS

```markdown
## PLACEHOLDERS PROFESIONALES
- Unsplash: `https://images.unsplash.com/photo-[id]?w=800&q=80`
- Avatares: `https://i.pravatar.cc/150?img=[1-70]`

## ASPECT RATIOS
- Hero mockup: `aspect-[4/3]`
- Bonos: `aspect-video`
- Testimonios avatar: `aspect-square` (w-16 h-16)

## TRATAMIENTO DE IMÁGENES
- Rounded: `rounded-2xl` o `rounded-3xl`
- Sombra: `shadow-lovable-lg`
- Hover: `hover:scale-[1.02] transition-transform duration-500`
- Border: `border-2 border-white` (para avatares en grupo)

## LAZY LOAD
Todas las imágenes: `loading="lazy"`
```

---

## 4. SISTEMA DE TEMAS AUTOMÁTICO

### TEMA 1: SOFT (Crianza, Salud Mental, Bienestar)

```css
:root {
  --primary-50: #fef2f2;
  --primary-100: #fee2e2;
  --primary-500: #ef4444;
  --primary-600: #dc2626;
  --primary-700: #b91c1c;
  --primary-rgb: 220, 38, 38;
}
```

```markdown
## CARACTERÍSTICAS VISUALES
- Colores: Fondo `bg-rose-50/30`, Acento `text-rose-600`, Botones `bg-rose-500`
- Bordes: `rounded-3xl` (muy redondeado)
- Fuentes: Serif para títulos alternativo: 'Playfair Display'
- Mood: Cálido, acogedor, empático
```

### TEMA 2: HIGH-ENERGY (Fitness, Dinero, Ventas)

```css
:root {
  --primary-50: #f7fee7;
  --primary-100: #ecfccb;
  --primary-500: #84cc16;
  --primary-600: #65a30d;
  --primary-700: #4d7c0f;
  --primary-rgb: 101, 163, 13;
  
  /* Fondo oscuro */
  --bg-dark: #0f172a;
}
```

```markdown
## CARACTERÍSTICAS VISUALES
- Colores: Fondo `bg-slate-950`, Texto `text-white`, Acento `text-lime-400`, Botones `bg-lime-400 text-black`
- Bordes: `rounded-lg` (más rectos)
- Fuentes: Sans-serif bold: 'Archivo Black' o mantener Outfit
- Mood: Enérgico, urgente, impactante
```

### TEMA 3: ELEGANCE (B2B, Productividad, Educación)

```css
:root {
  --primary-50: #eef2ff;
  --primary-100: #e0e7ff;
  --primary-500: #6366f1;
  --primary-600: #4f46e5;
  --primary-700: #4338ca;
  --primary-rgb: 79, 70, 229;
}
```

```markdown
## CARACTERÍSTICAS VISUALES
- Colores: Fondo `bg-white`, Acento `text-indigo-600`, Botones `bg-indigo-600`
- Bordes: `rounded-xl`
- Bordes sutiles: `border border-slate-200`
- Sombras: Muy sutiles, profesionales
- Mood: Profesional, confiable, sofisticado
```

---

## 5. ESTRUCTURA DE CONTENIDO (Copywriting + UX)

### ORDEN OBLIGATORIO DE SECCIONES:

```markdown
1. HERO SECTION
2. SOCIAL PROOF MINI (integrado en Hero)
3. SECCIÓN "¿TE SUENA FAMILIAR?" (Pain Points)
4. AGITACIÓN (Consecuencias de no actuar)
5. LA SOLUCIÓN (Presentación del producto)
6. MECANISMO ÚNICO (Cómo funciona)
7. STACK DE VALOR (Bonos)
8. OFERTA IRRESISTIBLE (Precio + CTA)
9. GARANTÍA
10. FAQ (Objeciones)
11. CIERRE EMOCIONAL (Último CTA)
```

### SECCIÓN 1: HERO (Especificaciones Exactas)

```html
<section class="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 py-32 md:py-48">
  <!-- Grid Pattern -->
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
  
  <div class="relative max-w-7xl mx-auto px-6">
    <div class="grid md:grid-cols-2 gap-16 items-center">
      
      <!-- COLUMNA IZQUIERDA: Texto -->
      <div class="space-y-8">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 border border-primary-100">
          <span class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></span>
          <span class="text-sm font-semibold text-primary-700">Oferta por Tiempo Limitado</span>
        </div>
        
        <!-- Título -->
        <h1 class="text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-balance">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">
            [Mecanismo Único en menos de 10 palabras]
          </span>
        </h1>
        
        <!-- Subtítulo -->
        <p class="text-xl md:text-2xl text-slate-600 leading-relaxed">
          [Promesa específica: "Para que puedas [RESULTADO FINAL] sin [DOLOR PRINCIPAL]"]
        </p>
        
        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4">
          <button class="group relative px-8 py-4 rounded-full bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold text-lg shadow-cta hover:shadow-xl hover:scale-105 transition-all duration-300">
            Comprar Ahora - $XX
            <span class="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </button>
          
          <button class="px-8 py-4 rounded-full border-2 border-slate-200 bg-white hover:bg-slate-50 font-semibold text-slate-700 transition-all">
            Ver Demo →
          </button>
        </div>
        
        <!-- Social Proof -->
        <div class="flex items-center gap-6 pt-4">
          <div class="flex -space-x-3">
            <img class="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1" loading="lazy" />
            <img class="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=2" loading="lazy" />
            <img class="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=3" loading="lazy" />
          </div>
          <div>
            <div class="flex gap-1">
              <span class="text-yellow-400">★★★★★</span>
            </div>
            <p class="text-sm text-slate-600">Más de <strong class="counter" data-target="2847">0</strong> clientes satisfechos</p>
          </div>
        </div>
      </div>
      
      <!-- COLUMNA DERECHA: Mockup -->
      <div class="relative">
        <div class="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent blur-3xl"></div>
        
        <img 
          src="[URL del mockup]" 
          class="relative rounded-3xl shadow-lovable-lg hover:scale-[1.02] transition-transform duration-500"
          alt="Product Mockup"
          loading="eager"
        />
        
        <!-- Badge flotante -->
        <div class="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl rounded-2xl p-6 shadow-lovable">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <div>
              <p class="text-2xl font-extrabold text-slate-900">100%</p>
              <p class="text-sm text-slate-600">Garantizado</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>
```

### SECCIÓN 2: PAIN POINTS

```html
<section class="scroll-reveal py-32 bg-white">
  <div class="max-w-4xl mx-auto px-6">
    <!-- Título de sección -->
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight text-balance mb-6">
        ¿Te Suena Familiar?
      </h2>
      <p class="text-xl text-slate-600">
        Sabemos exactamente por lo que estás pasando...
      </p>
    </div>
    
    <!-- Grid de dolores -->
    <div class="grid gap-6">
      <!-- Dolor 1 -->
      <div class="flex items-start gap-6 bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-all">
        <div class="flex-shrink-0 text-4xl">😰</div>
        <div>
          <h4 class="text-lg font-semibold text-slate-900 mb-2">[Dolor Específico]</h4>
          <p class="text-slate-600">[Descripción empática del dolor]</p>
        </div>
      </div>
      
      <!-- Repetir para cada dolor -->
    </div>
  </div>
</section>
```

### SECCIÓN 3: STACK DE VALOR (Bonos)

```html
<section class="scroll-reveal py-32 bg-gradient-to-br from-slate-50 to-white">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight text-balance mb-6">
        Esto Es Lo Que Recibes Hoy
      </h2>
      <p class="text-xl text-slate-600">
        No es solo un producto, es un sistema completo
      </p>
    </div>
    
    <!-- Grid asimétrico -->
    <div class="grid md:grid-cols-3 gap-8">
      
      <!-- Bono Principal (2 columnas) -->
      <div class="md:col-span-2 bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-3xl p-12 shadow-lovable-lg">
        <div class="flex items-center gap-3 mb-6">
          <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
            <span class="text-2xl">📚</span>
          </div>
          <span class="text-sm font-semibold uppercase tracking-wide opacity-90">Producto Principal</span>
        </div>
        
        <h3 class="text-4xl font-extrabold mb-4">[Nombre del Producto]</h3>
        <p class="text-white/90 text-lg leading-relaxed mb-6">
          [Descripción del valor que aporta]
        </p>
        
        <div class="flex items-baseline gap-2">
          <span class="text-sm opacity-75">Valor:</span>
          <span class="text-3xl font-bold">$XX</span>
        </div>
      </div>
      
      <!-- Bono Secundario 1 -->
      <div class="bg-white rounded-3xl p-8 shadow-lovable hover:shadow-lovable-lg transition-all">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 shadow-lg mb-6">
          <span class="text-2xl">🎁</span>
        </div>
        
        <h4 class="text-2xl font-bold text-slate-900 mb-4">Bono #1</h4>
        <p class="text-slate-600 mb-6">[Descripción]</p>
        
        <div class="flex items-baseline gap-2">
          <span class="text-sm text-slate-500">Valor:</span>
          <span class="text-2xl font-bold text-primary-600">$XX</span>
        </div>
      </div>
      
      <!-- Repetir para bonos 2 y 3 -->
    </div>
    
    <!-- Valor Total -->
    <div class="mt-12 text-center">
      <p class="text-slate-600 text-lg mb-2">Valor Total del Paquete:</p>
      <p class="text-5xl font-extrabold text-slate-900">
        <span class="line-through text-slate-400 text-3xl">$XXX</span>
        <span class="text-primary-600 ml-4">$XX</span>
      </p>
      <p class="text-slate-600 mt-2">¡Ahorras $XXX hoy!</p>
    </div>
  </div>
</section>
```

### SECCIÓN 4: FAQ

```html
<section class="scroll-reveal py-32 bg-white">
  <div class="max-w-3xl mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight text-balance mb-6">
        Preguntas Frecuentes
      </h2>
    </div>
    
    <div class="space-y-4">
      <!-- FAQ Item -->
      <details class="group bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 shadow-sm border border-slate-100">
        <summary class="flex justify-between items-center cursor-pointer list-none">
          <h4 class="text-lg font-semibold text-slate-900">¿[Pregunta]?</h4>
          <svg class="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
          </svg>
        </summary>
        <p class="mt-4 text-slate-600 leading-relaxed">
          [Respuesta detallada que elimina la objeción]
        </p>
      </details>
      
      <!-- Repetir 6-10 preguntas -->
    </div>
  </div>
</section>
```

---

## 6. ESPECIFICACIONES TÉCNICAS FINALES

### ORGANIZACIÓN DE ARCHIVOS

```
/landings/
  /nombre-producto/
    index.html          (Página completa)
    /assets/
      /images/         (Mockups, iconos)
    README.md          (Notas del producto)
```

### PERFORMANCE Y SEO

```html
<!-- Meta Tags Obligatorios -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="[Descripción de 150-160 caracteres]">
<title>[Nombre Producto] - [Beneficio Principal]</title>

<!-- Open Graph -->
<meta property="og:title" content="[Título]">
<meta property="og:description" content="[Descripción]">
<meta property="og:image" content="[URL imagen]">

<!-- Preload de fuentes -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### OPTIMIZACIONES

```markdown
- Imágenes: WebP format, lazy loading
- Critical CSS: Inline en <head>
- Scripts: Defer o async
- Minificación: HTML/CSS en producción
```

---

## 7. CHECKLIST FINAL PRE-ENTREGA

Antes de entregar la landing, verificar:

- [ ] ¿Tema visual seleccionado correctamente según categoría?
- [ ] ¿Gradientes sutiles en fondos? (no colores planos)
- [ ] ¿CTAs con sombras del color del acento?
- [ ] ¿Títulos con `font-extrabold` y mínimo `text-6xl` en Hero?
- [ ] ¿Scroll animations implementadas?
- [ ] ¿Spacing generoso (py-32+ entre secciones)?
- [ ] ¿Iconos dentro de círculos con gradiente?
- [ ] ¿Mockups con sombra multicapa?
- [ ] ¿Grid pattern decorativo en Hero?
- [ ] ¿Elementos con glassmorphism (backdrop-blur)?
- [ ] ¿Responsive perfecto en mobile?
- [ ] ¿Lazy loading en imágenes?
- [ ] ¿FAQ con objeciones de dinero, tiempo y capacidad?
- [ ] ¿Contador animado en stats?
- [ ] ¿Meta tags y SEO básico?

---

## 8. COMANDOS RÁPIDOS PARA CURSOR

```markdown
# Para iniciar un nuevo proyecto
"Genera la landing completa para [PRODUCTO] usando el PRD_LOVABLE_COMPLETE.md y el CONTENIDO_PRODUCTO.md. Aplica el tema [SOFT/HIGH-ENERGY/ELEGANCE]"

# Para ajustar una sección
"Mejora la sección de bonos siguiendo las especificaciones del PRD, usando grid asimétrico"

# Para cambiar tema
"Convierte esta landing del tema Soft al tema High-Energy manteniendo la estructura"
```

---

**FIN DEL PRD COMPLETO**
Versión 2.0 - Enero 2025
