const { defineConfig } = require("cypress");
require('dotenv').config()

module.exports = defineConfig({
  projectId: "abk7c5",
  viewportWidth: 1500,
  viewportHeight: 660,
  pageLoadTimeout: 10000,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    SESSION_NAME: process.env.SESSION_NAME,
    SESSION_VALUE: process.env.SESSION_VALUE,
    BASE_URL: process.env.BASE_URL,
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD
  }
});
