import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import jsconfigPaths from 'vite-jsconfig-paths';
export default defineConfig({ plugins: [svelte(), jsconfigPaths()], envDir: './env' });
