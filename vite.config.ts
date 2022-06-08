import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  let targets = ['>0.2%', 'not dead', 'not op_mini all'];

  if (command === 'serve') {
    targets = ['last 1 chrome version', 'last 1 firefox version', 'last 1 safari version'];
  }

  return {
    build: {
      outDir: 'build',
      sourcemap: true,
    },
    plugins: [
      legacy({
        targets: targets,
      }),
      react(),
    ],
    preview: {
      https: true,
    },
    server: {
      https: true,
    },
  };
});
