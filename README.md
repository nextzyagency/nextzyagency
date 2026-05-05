# Nextzy Agency

Bienvenido al repositorio de **Nextzy Agency**, una agencia especializada en diseño web profesional, orientado a conversiones y optimizado para SEO (Landing pages, webs corporativas y e-commerce).

## 🚀 Tecnologías Principales (Stack)

Este proyecto está construido con las siguientes tecnologías para garantizar un rendimiento óptimo, SEO técnico avanzado y animaciones fluidas:

- **[Astro](https://astro.build/)** (v4) - Framework web super rápido y orientado al contenido (SSG).
- **[Tailwind CSS](https://tailwindcss.com/)** (v3.4) - Framework CSS de utilidad (Utility-first) para un estilado rápido y escalable.
- **[GSAP](https://gsap.com/)** - Biblioteca de animaciones de alto rendimiento para interacciones fluidas.
- **TypeScript** - Tipado estático para un código más robusto y mantenible.

## 📁 Estructura del Proyecto

```text
/
├── public/                 # Archivos estáticos (imágenes, fuentes, iconos, favicon, etc.)
├── src/
│   ├── components/         # Componentes reutilizables
│   │   ├── sections/       # Secciones completas de la página (Hero, Services, Testimonials, etc.)
│   │   └── ui/             # Componentes de interfaz pequeños (Header, Botones, Cards, etc.)
│   ├── layouts/            # Plantillas maestras (Layout.astro con setup de SEO y metadatos)
│   ├── pages/              # Páginas del sitio web (Rutas de Astro)
│   │   ├── index.astro     # Landing page principal (Home)
│   │   └── portafolio.astro# Página del portafolio de proyectos
│   └── styles/             # Estilos globales y directivas de Tailwind
├── astro.config.mjs        # Configuración de Astro
├── tailwind.config.mjs     # Configuración de Tailwind y colores de la marca
└── package.json            # Dependencias y scripts
```

## 🧞 Comandos y Scripts

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

| Comando | Acción |
| :--- | :--- |
| `npm run dev` | Inicia el servidor local de desarrollo en `localhost:4321`. |
| `npm run build` | Construye el proyecto para producción en el directorio `dist/`. |
| `npm run preview` | Inicia un servidor local para previsualizar la versión compilada (`dist/`). |
| `npm run deploy` | Construye y despliega directamente a Cloudflare Pages usando Wrangler. |
| `npm run astro` | Ejecuta comandos de la CLI de Astro. |

## 🏗️ Estructura de la Landing Page (`index.astro`)

La página principal sigue una estructura orientada a conversiones basada en el framework del negocio:

1. **Header**: Navegación y logo.
2. **Hero**: Propuesta de valor principal y CTA destacado.
3. **SocialProof**: Logos de marcas de confianza y validación social.
4. **Services**: Explicación clara de servicios enfocada en beneficios y resultados.
5. **Features**: Características diferenciadoras.
6. **Testimonials**: Pruebas sociales y casos de éxito de clientes.
7. **Process**: Proceso paso a paso claro de trabajo.
8. **Cta**: Llamado a la acción principal con urgencia o incentivo.
9. **Footer**: Enlaces útiles, redes sociales y contacto.

## ⚙️ Características Técnicas y SEO

- **Meta Tags y SEO**: Gestionados globalmente en `src/layouts/Layout.astro`. Cada página define su propio `title` y `description`.
- **Rendimiento**: Astro elimina el JS innecesario de manera predeterminada. Las animaciones pesadas usan GSAP para mantener 60fps.
- **Hosting / Deploy**: El sitio está completamente optimizado para **Cloudflare Pages**. Se recomienda que las imágenes pesadas se manejen mediante el sistema de imágenes optimizadas de Astro (`<Image />` desde `src/assets/`) para evitar errores 500 con Polish en Cloudflare y ofrecer siempre el mejor formato (WebP).
- **Tracking**: Incluye integración base con el Meta Pixel (Facebook Pixel) en el head del layout principal.

## 🤝 Colaboración y Desarrollo

Al crear nuevas páginas o componentes, respeta siempre las reglas globales del proyecto:
- Mantener la jerarquía estricta de encabezados (`h1` -> `h2` -> `h3`).
- Añadir los atributos `alt` y `title` a todas las imágenes nuevas.
- Priorizar el diseño minimalista, moderno, y premium.
- Evitar emojis en producción, utilizar íconos en formato SVG.
- Mantener los bloques de estilos y lógicas limpios y modularizados.
