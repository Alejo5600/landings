#!/usr/bin/env python3
"""
Script para optimizar imágenes a WebP con múltiples tamaños
Requiere: pip install pillow
"""

try:
    from PIL import Image
    import os
    import sys
except ImportError:
    print("Error: Pillow no está instalado.")
    print("Instala con: pip install pillow")
    sys.exit(1)

def optimize_image(input_path, output_dir="assets"):
    """Convierte PNG a WebP en múltiples tamaños"""
    
    if not os.path.exists(input_path):
        print(f"Error: No se encuentra {input_path}")
        return
    
    # Crear directorio de salida si no existe
    os.makedirs(output_dir, exist_ok=True)
    
    # Abrir imagen original
    img = Image.open(input_path)
    original_size = os.path.getsize(input_path) / 1024  # KB
    
    print(f"Imagen original: {img.size[0]}x{img.size[1]} ({original_size:.1f} KB)")
    
    # Tamaños objetivo (ancho máximo)
    sizes = {
        'mobile': 640,
        'tablet': 896,
        'desktop': 1344
    }
    
    base_name = os.path.splitext(os.path.basename(input_path))[0]
    
    for name, max_width in sizes.items():
        # Calcular altura proporcional
        ratio = img.size[1] / img.size[0]
        new_width = min(max_width, img.size[0])
        new_height = int(new_width * ratio)
        
        # Redimensionar
        resized = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
        
        # Guardar como WebP
        output_path = os.path.join(output_dir, f"{base_name}-{name}.webp")
        resized.save(output_path, 'WEBP', quality=85, method=6)
        
        new_size = os.path.getsize(output_path) / 1024  # KB
        reduction = (1 - new_size / original_size) * 100
        
        print(f"  {name}: {new_width}x{new_height} -> {output_path} ({new_size:.1f} KB, -{reduction:.1f}%)")
    
    # También crear versión PNG optimizada como fallback
    png_output = os.path.join(output_dir, f"{base_name}-optimized.png")
    img.save(png_output, 'PNG', optimize=True, compress_level=9)
    png_size = os.path.getsize(png_output) / 1024
    print(f"  PNG optimizado: {png_output} ({png_size:.1f} KB)")

if __name__ == "__main__":
    input_image = "assets/mockup1.png"
    
    if len(sys.argv) > 1:
        input_image = sys.argv[1]
    
    print("Optimizando imagen a WebP...")
    print("=" * 50)
    optimize_image(input_image)
    print("=" * 50)
    print("¡Optimización completada!")
    print("\nNota: Actualiza el HTML para usar las nuevas imágenes WebP.")
