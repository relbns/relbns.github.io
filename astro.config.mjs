import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { readFileSync } from 'fs';

// Read package.json to get version
const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'));

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
      __APP_VERSION__: JSON.stringify(packageJson.version),
      __COMMIT_HASH__: JSON.stringify(process.env.VITE_COMMIT_HASH || '2b718a5fcaf298e5295ab7e0dbb85c9d8ac19b5e'),
    },
  },
});
