const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1500,
  viewportHeight: 660,
  pageLoadTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  chromeWebSecurity: false
});
