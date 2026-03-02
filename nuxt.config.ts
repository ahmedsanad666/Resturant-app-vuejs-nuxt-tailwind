// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@nuxt/image'
  ],

  devtools: {
    enabled: true
  },
// i18n Configuration
i18n: {
  langDir: 'locales',
  strategy: 'prefix_except_default', // Adds /es/ to the URL for other languages
  defaultLocale: 'tr',
  locales: [
    { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
    { code: 'tr', name: 'Türkçe', iso: 'tr-TR', file: 'tr.json' }
  ],
  // Optional: Use a separate file for translations to keep this file clean
  vueI18n: './i18n.config.ts' 
},

// Image Configuration
image: {
  // Add domains here if you fetch images from external sites (Unsplash, etc.)
  domains: ['images.unsplash.com'] 
},
  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})