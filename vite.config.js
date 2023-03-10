import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    svgrPlugin({
      // Set it to `true` to export React component as default.
      // Notice that it will overrides the default behavior of Vite.
      exportAsDefault: false,
    })
  ],
});
