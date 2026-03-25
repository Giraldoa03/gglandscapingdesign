# G&G Landscaping Design - Website

Bienvenido a tu sitio web profesional de landscaping. Este proyecto incluye una página web moderna, responsiva e interactiva para tu empresa de diseño de paisajismo.

## 📋 Características

✅ **Diseño Responsivo** - Se adapta perfectamente a dispositivos móviles, tablets y escritorio
✅ **Navegación Suave** - Menú interactivo con animaciones suaves
✅ **Secciones Completas**:
   - Home: Sección hero atractiva
   - Servicios: 6 servicios principales con iconos
   - Our Work: Galería de proyectos con overlay
   - Contact Us: Formulario de contacto e información

✅ **Botón WhatsApp**: Acceso directo desde la esquina derecha
✅ **Redes Sociales**: Enlaces a Facebook, Instagram, Twitter y LinkedIn en el footer
✅ **Interactividad**: Animaciones, efectos hover, formulario interactivo
✅ **SEO Friendly**: Estructura HTML semántica

## 🚀 Cómo Usar

### Opción 1: Abrir directamente en el navegador
1. Abre el archivo `index.html` en tu navegador web
2. La página se cargará inmediatamente

### Opción 2: Usar un servidor local (recomendado)
En la terminal (en la carpeta del proyecto):

```bash
# Python 3
python -m http.server 8000

# O si tienes Python 2
python -m SimpleHTTPServer 8000

# O con Node.js (si tienes npm)
npx http-server
```

Luego abre: `http://localhost:8000`

## 📝 Personalización

### Cambiar números de contacto
1. Abre `index.html`
2. Busca la sección "Contáctanos" (Contact Section)
3. Actualiza: teléfono, email y ubicación

### Cambiar WhatsApp
En `index.html`, encontrarás el botón de WhatsApp:
```html
<a href="https://wa.me/1234567890?text=Hola,%20quiero%20más%20información%20sobre%20vuestros%20servicios" ...>
```

Reemplaza `1234567890` con tu número (sin espacios ni símbolos)

### Cambiar Redes Sociales
En el footer (`index.html`), actualiza los links de redes sociales:
```html
<a href="https://www.facebook.com/tuPagina" target="_blank">
```

### Agregar Imágenes Reales
1. Coloca tus imágenes en la carpeta `img/`
2. En `index.html`, reemplaza las URLs de `placeholder`:
```html
<!-- De esto: -->
<img src="https://via.placeholder.com/300x200?text=Proyecto+1" alt="...">

<!-- A esto: -->
<img src="img/proyecto1.jpg" alt="...">
```

### Cambiar Colores
En `style.css`, busca las variables de color (línea 9-16):
```css
:root {
    --primary-color: #2d7a3e;    /* Verde principal */
    --secondary-color: #45a049;  /* Verde secundario */
    --accent-color: #ff6b6b;     /* Rojo para botones */
}
```

### Cambiar Servicios
En `index.html`, en la sección de Servicios, puedes:
- Cambiar títulos de servicios
- Cambiar descripciones
- Cambiar iconos (usa FontAwesome: https://fontawesome.com/icons)

## 📁 Estructura del Proyecto

```
gg website/
├── index.html          # Página principal
├── style.css           # Estilos y responsividad
├── script.js           # Interactividad JavaScript
├── img/                # Carpeta para imágenes
├── assets/             # Carpeta para otros archivos
└── README.md           # Este archivo
```

## 🎨 Colores Utilizados

- **Verde Primario**: #2d7a3e (para headers y botones principales)
- **Verde Secundario**: #45a049 (para efectos hover)
- **Rojo Acentos**: #ff6b6b (para CTA buttons)
- **Blanco**: #ffffff (fondo principal)
- **Gris Claro**: #f4f4f4 (secciones alternadas)
- **Verde WhatsApp**: #25d366

## 📱 Responsive Breakpoints

El sitio es completamente responsive:
- **Desktop**: 1200px+ (vista completa)
- **Tablet**: 768px - 1199px (menú adaptado)
- **Móvil**: menos de 768px (menú hamburguesa)

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Flexbox, Grid, animaciones
- **JavaScript Vanilla**: Sin dependencias externas
- **FontAwesome**: Iconos profesionales
- **Responsive Design**: Mobile-first approach

## 📧 Información de Contacto

Para actualizar la información de contacto:
1. Teléfono: Busca "+1 (555) 123-4567"
2. Email: Busca "info@gglandscaping.com"
3. Ubicación: Busca "Tu ciudad, Tu País"

## ✨ Funcionalidades JavaScript

1. **Menú Mobile**: Hamburguesa interactiva que se despliega
2. **Scroll Suave**: Navegación con scroll suave
3. **Animaciones de Entrada**: Elementos aparecen con animación
4. **Validación de Formulario**: Das feedback al usuario
5. **Link Activo**: Indica qué sección estás viendo
6. **Efectos Hover**: Interactividad en cards y elementos

## 🚨 Notas Importantes

- Asegúrate de reemplazar todos los placeholders con tu información real
- Las imágenes de placeholder son solo para demostración
- El número de WhatsApp debe estar en formato internacional
- Para mejorar SEO, actualiza el título en `<title>`

## 📞 Próximos Pasos

1. Agregar imágenes reales de tus proyectos
2. Configurar un email para recibir mensajes del formulario
3. Añadir certificado SSL para HTTPS
4. Optimizar imágenes para web
5. Añadir Google Analytics para estadísticas

¡Tu sitio está listo para impresionar a tus clientes! 🎉
