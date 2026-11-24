import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' lets the built site run from any folder (e.g. Apache htdocs/webtech-react/dist)
export default defineConfig({ plugins: [react()], base: './' });
