// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, '/'),
  },
  devServer: {},
  devtools: { enabled: true },
  css: [
    '~/assets/main.scss'
  ],
  srcDir: "src/",
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
        'Nunito': true,
        download: true,
        inject: true
      }
    }]
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }],
    },
  }
})
