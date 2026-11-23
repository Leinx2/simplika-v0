# Simplika · Portafolio grupal

Sitio que reúne el trabajo del semestre: la problemática de Simplika, el pitch, el prototipo anterior, los portafolios personales del equipo y el ensayo.

Conserva la identidad visual del proyecto Simplika anterior: paleta morada y lila, tipografías Nunito y Patrick Hand, logo, ilustración y fotografías del equipo. Es un proyecto independiente; no modifica la web original.

## Abrir la web

Abre `index.html` en el navegador. No requiere instalación de paquetes, compilación ni servidor de aplicación.

También puedes usar un servidor local desde esta carpeta:

```powershell
python -m http.server 5500 --bind 127.0.0.1
```

Visita `http://127.0.0.1:5500`. Detén el servidor con `Ctrl+C`.

Las fuentes de Google y el reproductor de YouTube necesitan conexión a internet. Las páginas, imágenes, estilos y navegación son locales. Si YouTube impide reproducir el video integrado, se ofrece un enlace directo al pitch.

## Páginas

| Archivo | Contenido |
| --- | --- |
| `index.html` | Bienvenida y recorrido del proyecto. |
| `problematica.html` | Texto de la problemática suministrado en el documento. |
| `pitch.html` | Introducción, video integrado y enlace a YouTube. |
| `prototipo.html` | Captura del proyecto anterior y enlace al prototipo publicado. |
| `sobre-nosotros.html` | Equipo y enlaces a los tres portafolios personales. |
| `ensayo.html` | Acceso al ensayo en Google Docs. |

## Editar contenido

- Los textos y enlaces están en los HTML. Si cambias el menú o el pie de página, actualiza las seis páginas para mantenerlos consistentes.
- La paleta y el diseño adaptable están en `assets/css/styles.css`; las variables de color están en `:root`.
- El comportamiento del menú móvil está en `assets/js/app.js`. El contenido y los enlaces también funcionan sin JavaScript.
- Las fotografías están en `images/`; el logo, favicon, ilustración y captura del prototipo están en `assets/images/`.

Los enlaces externos se abren en otra pestaña. El acceso a Google Docs y Google Sites depende de los permisos establecidos por sus propietarios; esta web no cambia esos permisos.

## Publicar en GitHub Pages

El proyecto está preparado para publicarse como sitio estático desde la raíz de un repositorio. Usa rutas relativas para funcionar tanto en un dominio como en una subcarpeta. `.nojekyll` evita el procesamiento por Jekyll.

1. Crea o elige el repositorio de destino y sube los seis HTML, `assets/`, `images/`, `.nojekyll`, `.gitignore` y este README.
2. En GitHub, abre **Settings → Pages** y elige la publicación desde una rama (**Deploy from a branch**).
3. Selecciona la rama que contiene los archivos y la carpeta **/ (root)**; guarda la configuración.
4. Cuando GitHub termine la publicación, abre la dirección que aparece en Pages y revisa la navegación y los recursos externos.

Repositorio de destino: [Leinx2/simplika-v0](https://github.com/Leinx2/simplika-v0). El sitio está preparado para publicarse desde `main`, carpeta raíz. La publicación en GitHub Pages se configura por separado siguiendo los pasos anteriores. No se requieren claves, variables de entorno ni acciones de compilación.

## Verificación realizada

Se comprobaron las seis páginas en Chrome a 320, 360, 390, 700, 768, 959, 960, 1024 y 1440 píxeles, sin desbordamiento horizontal ni errores de JavaScript. Se revisaron imágenes, enlaces locales, página activa, navegación desde una subcarpeta, menú móvil, tecla Escape, acceso por teclado, salto al contenido, movimiento reducido y navegación sin JavaScript.

El prototipo, el pitch y los tres portafolios respondieron correctamente al comprobar sus enlaces. El ensayo respondió con HTTP 401 a la consulta sin autenticación; conviene revisar sus permisos de uso compartido antes de entregar el enlace a personas sin acceso.

El reproductor integrado de YouTube cargó el título y la vista previa del pitch. La prueba de Chrome sin interfaz no consiguió confirmar el avance de la reproducción; el enlace directo a YouTube permanece disponible. Para revisar el video localmente, usa el servidor HTTP indicado arriba: abrir el HTML como archivo puede provocar restricciones del reproductor externo.

## Créditos

Equipo: Sofía Upegui Montoya, Sebastián Ruíz Mosquera y Salomé Zapata García. Contenido y enlaces tomados del documento suministrado para el proyecto. Recursos visuales reutilizados de la web anterior de Simplika.

Implementación guiada por el autor del proyecto con asistencia de Codex de OpenAI.
