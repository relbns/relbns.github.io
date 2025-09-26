import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://relbns.github.io',
  base: '/',
  integrations: [
    tailwind({
      applyBaseStyles: false,
    })
  ],
  output: 'static',
  vite: {
    define: {
      __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
    },
  },
});
