import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://gabo0.github.io', // Placeholder based on system path
  base: '/pagina-nextzy',             // Based on folder name
  integrations: [tailwind()],
});
