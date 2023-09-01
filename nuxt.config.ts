// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: "Nuxt Template"
    },
  },
  css: ['~/assets/css/main.css'],
  modules: [
      '@nuxtjs/tailwindcss',
      '@pinia/nuxt',
  ],
  pinia: {
    autoImports: [
      'defineStore',  // import { defineStore } from 'pinia'
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});