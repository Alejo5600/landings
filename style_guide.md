# UI/UX MASTER RULES (LOVABLE/V0 STYLE)

## 1. Tech Stack
- Use Tailwind CSS (CDN) for all styling.
- Use Google Fonts: 'Inter' for body and 'Outfit' or 'Cal Sans' for headings.

## 2. Visual DNA (The "Lovable" Look)
- **Whitespace:** Double the current padding. Use `py-20` to `py-32` for sections.
- **Max-Width:** Content container must be `max-w-4xl` (narrower is more elegant for sales pages).
- **Typography:** - Headings: `text-balance`, `tracking-tight`, `font-bold`.
  - Body: `text-slate-600`, `leading-relaxed`.
- **Buttons (CTAs):** - High contrast (Primary color vs White).
  - Huge padding: `px-8 py-4`.
  - Rounded-full (capsule style).
  - Subtle `shadow-lg` and `hover:scale-105` transition.
- **Cards:** White background, border `border-slate-100`, shadow `shadow-sm`.

## 3. Components to Mimic
- **Hero:** Big centered heading, subtle gradient background (e.g., `bg-gradient-to-b from-slate-50 to-white`).
- **Features:** Icons inside soft-colored circles (e.g., `bg-blue-50 text-blue-600`).
- **Social Proof:** Testimonials in clean cards with small star ratings.

## 4. SISTEMA DE TEMAS AUTOMÁTICO
Cursor, antes de diseñar, identifica la categoría del producto en `CONTENIDO_PRODUCTO.md` y aplica uno de estos temas:

- **Tema Soft (Crianza, Salud Mental, Bienestar):**
  - Colores: Fondo `bg-rose-50/30`, Acento `text-rose-600`, Botones `bg-rose-500`.
  - Bordes: `rounded-3xl` (muy redondeado).
  - Fuentes: Serif para títulos (ej: 'Playfair Display').

- **Tema High-Energy (Fitness, Dinero, Ventas):**
  - Colores: Fondo `bg-slate-950`, Texto `text-white`, Acento `text-lime-400`, Botones `bg-lime-400 text-black`.
  - Bordes: `rounded-lg` (más rectos).
  - Fuentes: Sans-serif bold (ej: 'Archivo Black').

- **Tema Corporate/Elegance (B2B, Libros, Productividad):**
  - Colores: Fondo `bg-white`, Acento `text-indigo-600`, Botones `bg-indigo-600`.
  - Bordes: `rounded-xl`.
  - Estilo: Bordes finos `border-slate-200`, sombras sutiles.