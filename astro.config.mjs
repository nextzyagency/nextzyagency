import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://nextzyagency.github.io', 
  base: '/nextzyagency',             
  integrations: [tailwind()],
});
