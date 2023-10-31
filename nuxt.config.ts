import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'

export default {
  css: ['@/assets/css/main.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/i18n', 'nuxt-svgo'],
  buildModules: [
    '@nuxt/typescript-build', // TypeScript support
    [
      'vueI18n',
      {
        include: [
          resolve(dirname(fileURLToPath(import.meta.url)), './locales/*.json')
        ]
      }
    ]
  ],
  build: {
    transpile: ['gsap'],
  },
  i18n: {
    vueI18n: './i18n.config.ts' // if you are using custom path, default
  }
};
