PRD: Guía de Estilo Visual y UI Premium (v0/Lovable Style)
1. Visión Estética
El objetivo es crear landing pages con un diseño minimalista, moderno y de alta gama. Se debe evitar el aspecto de "plantilla de 2010". El diseño debe respirar, ser profesional y utilizar jerarquía visual clara para guiar al usuario hacia la conversión.

2. Fundamentos de Diseño (Tokens)
A. Paleta de Colores y Contraste
Fondo: Utilizar blancos puros (#FFFFFF) o grises extremadamente claros (#F9FAFB) para el cuerpo.

Superficies (Cards): Fondo blanco con bordes sutiles de 1px (#E5E7EB).

Texto: * Títulos: Negro profundo (#111827).

Cuerpo: Gris oscuro legible (#374151).

Secundario: Gris medio (#6B7280).

Acento (Acción): Elegir un color vibrante pero profesional (ej: Azul eléctrico #2563EB o Violeta moderno #7C3AED).

B. Tipografía (Jerarquía)
Fuente: Usar fuentes sans-serif modernas (Inter, Geist o Montserrat).

Escala: * H1: Extra Bold, tracking reducido (-0.02em).

H2: Semi Bold, con mucho espacio superior.

Cuerpo: Línea de altura (line-height) amplia (1.6 a 1.8) para máxima legibilidad.

C. Bordes y Sombras (Soft UI)
Radios: Botones y cards deben tener border-radius: 12px o 16px (evitar esquinas cuadradas).

Sombras: Usar sombras muy suaves y difusas (Soft Shadows). Ejemplo: box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1).

3. Componentes de Alta Conversión 
Componente,Regla de Diseño
Botones (CTA),"Grandes, con padding generoso (12px 24px), efecto hover sutil (aclarar color) y transición de 0.2s."
Cards de Bonos,Fondo ligeramente distinto o borde de color acento para destacar.
Inputs de Formulario,"Altura mínima de 48px, bordes gris claro, foco con anillo de color de acento."
Secciones,Padding vertical amplio (mínimo 80px en desktop) para separar ideas.

4. Reglas de Layout (Composición)
Whitespace: "Si dudas, añade más espacio". No amontones elementos.

Max-Width: El contenido nunca debe tocar los bordes de la pantalla. Usar un contenedor de máximo 1200px centrado.

Mobile-First: Priorizar el diseño en una sola columna con fuentes grandes para lectura fácil en móviles.

Imágenes: Deben tener bordes redondeados y, de ser posible, una sombra muy leve para dar profundidad.

5. Instrucciones Técnicas para Cursor
"Cursor, al programar el CSS de las landings, sigue estas reglas técnicas:

Utiliza CSS Moderno (Flexbox y Grid).

Implementa Variables CSS en el :root para colores y espaciados.

Añade una sección de 'Reset' básica para que todo se vea igual en todos los navegadores.

Asegúrate de que los botones tengan cursor: pointer y estados :hover animados.

Usa box-sizing: border-box en todos los elementos.