import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import VitePluginDemo from './plugins/vite-plugin-demo'
import i18n from './plugins/vite-plugin-i18n-test'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve('./src'),
      "comps": resolve('./src/components')
    }
  },
  plugins: [vue(), VitePluginDemo(), i18n]
})
