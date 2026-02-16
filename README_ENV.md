# Variables de Entorno

Este proyecto utiliza variables de entorno para proteger datos sensibles que no deben estar en el repositorio.

## Configuración

1. Copia el archivo `.env.example` a `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edita el archivo `.env` y añade tus valores reales:
   ```
   META_PIXEL_ID=tu_id_de_pixel_aqui
   HOTMART_PRODUCT_ID=tu_id_de_producto_aqui
   GOOGLE_ANALYTICS_ID=tu_id_de_google_analytics_aqui
   ```

## Variables Requeridas

### `META_PIXEL_ID`
- **Descripción**: ID del pixel de Facebook/Meta para tracking de conversiones
- **Ejemplo**: `123456789012345`
- **Dónde se usa**: En el código del pixel de Meta en el HTML

### `HOTMART_PRODUCT_ID`
- **Descripción**: ID del producto en Hotmart para los enlaces de compra
- **Ejemplo**: `Q123456789I`
- **Dónde se usa**: En todas las URLs de compra (`https://pay.hotmart.com/{ID}`)

### `GOOGLE_ANALYTICS_ID`
- **Descripción**: ID de Google Analytics (gtag.js) para tracking de visitas
- **Ejemplo**: `G-XXXXXXXXXX`
- **Dónde se usa**: En el código de Google Analytics en el HTML (gtag.js)

## Seguridad

⚠️ **IMPORTANTE**: 
- El archivo `.env` está en `.gitignore` y NO debe subirse al repositorio
- Nunca compartas tus valores de variables de entorno públicamente
- En producción (Railway, etc.), configura estas variables en el panel de configuración de la plataforma

## Despliegue en Producción

Para plataformas como Railway, Heroku, etc., configura las variables de entorno en el panel de configuración de la plataforma, no en un archivo `.env`.
