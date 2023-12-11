const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    video: true,
    videoCOmpression: true,
    videoCompression: 15,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
