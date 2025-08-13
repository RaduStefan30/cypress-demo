import { defineConfig } from 'cypress'

export default defineConfig({
    e2e: {
        baseUrl: 'https://www.saucedemo.com',
        specPattern: 'cypress/e2e/**/*.cy.ts',
        viewportWidth: 1280,
        viewportHeight: 800,
        video: true,
        retries: { runMode: 1, openMode: 0 },
        chromeWebSecurity: false,
        blockHosts: ["https://events.backtrace.io"],

        setupNodeEvents(_on, config) {
            return config
        },
    },
})
