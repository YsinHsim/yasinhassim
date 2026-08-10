import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://yasinhassim.vercel.app',
  integrations: [tailwind()],
});
