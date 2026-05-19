// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://fabichu.github.io',
  base: '/calculadora-tortillas',
  vite: {
    plugins: [tailwindcss()]
  }
});