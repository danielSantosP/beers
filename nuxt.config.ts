// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    typeCheck: true,
  },
  ssr: false,
  modules: ['@pinia/nuxt'],
  head: {
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
  },
})
