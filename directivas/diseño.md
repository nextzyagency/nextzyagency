# Directivas de Diseño

*Aquí se documentará todo el diseño, animaciones y comportamiento del scroll (GSAP).*

Estilos Generales
Fuentes a utilizar:
Títulos: "Sora" (Limpia, geométrica y futurista).
Drama: "Instrument Serif" Itálica (Para crear un contraste masivo y sofisticado en palabras clave).
Datos y Etiquetas: "Fira Code" (Aporta un aspecto técnico de desarrollo frontend).
Paleta de colores:
Vacío Principal: --black (#0A0A0A) y --gray-900 (#111111).
Superficies y Tarjetas: --gray-800 (#1A1A1A) y --gray-700 (#2A2A2A).
Textos Secundarios: --gray-500 (#6B6B6B).
Textos Principales: --gray-300 (#CFCFCF) y --white (#FFFFFF).
Acentos Biotecnológicos: --purple-dark (#5B21B6) para sombras resplandecientes, --purple (#7C3AED) para botones e interacciones clave, --purple-light (#A78BFA) para bordes iluminados y hover states.
Identidad: Una experiencia inmersiva en modo oscuro de nivel premium, orientada a generar un alto "engagement"
. La identidad visual grita "veteranos del frontend"
, equilibrando un diseño estructurado con elementos visuales dinámicos que resultan sorprendentes pero fáciles de usar
.
Mood de Imagen: Estética de vidrio ahumado (glassmorphism oscuro), modelos 3D abstractos que reflejan luz de neón púrpura, rejillas sutiles en el fondo y elementos de interfaz de usuario limpios y flotantes.
Estilos de Sección (Integración GSAP)
HEADER: Contenedor tipo píldora flotante, fijo en el centro superior. Inicia completamente transparente. Mediante un ScrollTrigger, al detectar un scroll mayor a 50px, el fondo transiciona suavemente hacia un --gray-900 translúcido con un potente filtro de desenfoque de fondo y un sutil borde --gray-700
.
HERO: Altura fija de 100dvh. El fondo es una animación 3D en loop (renderizada en WebGL) de esferas orgánicas de cristal oscuro rotando e irradiando luz --purple. La tipografía principal aplica el plugin SplitText de GSAP, revelando cada línea desde el eje Y con un desenfoque que se enfoca dinámicamente, contrastando la tipografía Sans masiva y la Serif itálica
.
ABOUT US: Textos a gran escala que ocupan gran parte del viewport. Se utiliza un efecto de máscara de recorte impulsado por el scroll. A medida que el usuario baja, un fondo --gray-800 con ruido orgánico sube en paralaje inverso mientras el texto se ilumina palabra por palabra usando un "stagger" de GSAP sincronizado con la posición del scroll
.
SERVICES: Tres tarjetas de cristal que representan micro-UIs. Utilizando ScrollTrigger, las tarjetas están programadas para apilarse verticalmente (efecto de mazo de cartas)
. Cada tarjeta tiene un "hover state" gestionado con el plugin Observer, que inclina ligeramente la tarjeta en función de la posición del cursor del ratón (interacción 3D) y resalta el borde con --purple-light
.
MINI CTA: Cinta infinita (Marquee) impulsada por GSAP Ticker que fluye ininterrumpidamente de derecha a izquierda
. Letras en "Sora" a gran escala en color --black sobre un fondo --purple, creando un contraste de alto impacto que corta el flujo oscuro de la página.
TESTIMONIALS: En lugar de un contenedor anclado, la sección ocupará un 80dvh con un contenedor de ancho extendido (desbordando el viewport oculto con overflow-x: hidden). Implementaremos un carrusel infinito de tarjetas (Seamless Loop) utilizando el Helper Function de loop horizontal de GSAP y la manipulación de la línea de tiempo (Timeline)
.
Comportamiento de la animación: Las 3 tarjetas se desplazarán automáticamente de izquierda a derecha en un flujo constante. Mediante GSAP, cuando la última tarjeta cruza el umbral derecho del viewport, su posición en el eje X se reasigna inmediatamente al inicio del lado izquierdo, creando una ilusión de rotación infinita sin cortes visuales
.
Estilo de las Tarjetas: Serán bloques de cristal ahumado (fondo --gray-800 al 80% de opacidad con backdrop-filter: blur(12px)) y bordes --gray-700.
Interacción (Micro-UI): Utilizando eventos del DOM vinculados a GSAP, al hacer hover sobre cualquier tarjeta, la línea de tiempo del carrusel reducirá su escala de tiempo (timeScale(0.2)) para ralentizar el movimiento casi hasta pausarlo, permitiendo la lectura. La tarjeta enfocada se elevará sutilmente en el eje Z (efecto 3D) y su borde brillará en --purple-light.
CTA: Fondo --gray-900. El contenedor del formulario se revela escalando desde un 90% a un 100% de su tamaño natural, acompañado de un ligero aumento de opacidad al entrar en el viewport. Los campos de texto tienen líneas base que, al hacer foco, se animan desde el centro hacia afuera en color --purple. El botón se comporta de forma magnética al acercar el cursor.
FOOTER: Una sección totalmente independiente del CTA, marcada por una línea divisoria --gray-700 superior. Fondo sumamente oscuro (--black). Los enlaces y detalles legales se revelan mediante una animación stagger simple de abajo hacia arriba cuando la sección alcanza un 80% de visibilidad en la pantalla
.