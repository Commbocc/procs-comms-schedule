import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.js'),
      name: 'HcProcsComms',
    },
  },
})
