import { defineVitestConfig } from 'nuxt-vitest/config'
import { fileURLToPath } from 'node:url'

export default defineVitestConfig({
  test: {
    dir: fileURLToPath(new URL('./', import.meta.url)),
    environment: 'nuxt',
    globals: true,
    environmentOptions: {
      nuxt: {
        rootDir: fileURLToPath(new URL('../../apps/project1', import.meta.url)),
      }
    },
  }
})
