import { svelte } from '@sveltejs/vite-plugin-svelte';
import jsconfigPaths from 'vite-jsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [svelte(), jsconfigPaths()],
  envDir: './env',
  environment: 'jsdom',
});
