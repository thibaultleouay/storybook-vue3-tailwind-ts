/// <reference types="vitest" />

import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      // @/xxxx => src/xxxx
      {
        find: /^@\/(.+)/,
        replacement: `${resolve(__dirname, 'src')}/$1`,
      },
      // #/xxxx => types/xxxx
      {
        find: /^#\/(.+)/,
        replacement: `${resolve(__dirname, 'types')}/$1`,
      },
    ],
  },
  test: {
    environment: 'jsdom',
  },
  plugins: [
    vue(),
    Components({
      dirs: ['./src/components'],
    }),
  ],
  build: {
    sourcemap: true,
    // lib: {
    //     entry: resolve(__dirname, 'src/lib-components/index.ts'),
    //     name: 'test-library',
    //     formats: ['es'],
    // },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue', 'vue-router', 'vuex'],
      treeshake: true,
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
