// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@pinia/nuxt'],
  devtools: { enabled: true },
  css: ['@/assets/styles/main.scss'],
  compatibilityDate: '2025-07-15',
  eslint: {
    config: {
      stylistic: true, // Включает правила форматирования ESLint
    },
  },
})
