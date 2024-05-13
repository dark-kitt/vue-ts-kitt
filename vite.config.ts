import { resolve } from 'path';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';

export default defineConfig({
  cacheDir: '.yarn/cache/.vite',
  json: {
    stringify: true
  },
  plugins: [
    vue(),
    dts({
      outDir: ['dist', 'src/@types'],
      cleanVueFileName: true,
      staticImport: true,
      tsconfigPath: './tsconfig.json'
    })
  ],
  resolve: {
    extensions: ['.ts', '.vue', '.json'],
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  build: {
    target: 'ESNext',
    minify: false,
    reportCompressedSize: true,
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
