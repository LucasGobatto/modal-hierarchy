import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  build: {
    emptyOutDir: false,
    cssCodeSplit: false,
    commonjsOptions: { include: ['node_modules/**'] },
  },
});
