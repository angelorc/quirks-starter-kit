import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { polyfillNode } from "esbuild-plugin-polyfill-node";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      network: process.env.NUXT_PUBLIC_NETWORK || 'testnet',
    },
  },
  build: {
    transpile: ['vue-toastification', 'vuetify', '@quirks/vue', '@quirks/store', '@quirks/wallets'],
  },
  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
    '@quirks/nuxt',
    '@vueuse/nuxt',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    plugins: [
      polyfillNode({
        polyfills: {
          buffer: true,
        },
      }),
    ],
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: "globalThis",
        },
      },
      include: [
        '@quirks/vue',
        '@quirks/store',
        '@quirks/wallets'
      ]
    },
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
