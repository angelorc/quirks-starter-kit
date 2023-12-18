import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { polyfillNode } from "esbuild-plugin-polyfill-node";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    nftStorageApiKey: '',
    public: {
      network: process.env.NUXT_PUBLIC_NETWORK || 'testnet',
      chainId: 'bitsong-2b',
      appName: 'Studio',
      links: {
        tos: 'https://bitsong.io/tos',
        privacy: 'https://bitsong.io/privacy'
      },
      ipfsGatewaySuffix: '.ipfs.nftstorage.link',
      ipfsGateway: 'https://bas-cdn.com/ipfs/'
    },
  },
  build: {
    transpile: ['vue-toastification', 'vuetify'],
  },
  routeRules: {
    '/ipfs/**': { proxy: 'https://bas-cdn.com/ipfs/**' }
  },
  image: {
    domains: ['localhost'],
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
    plugins: [polyfillNode()],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
