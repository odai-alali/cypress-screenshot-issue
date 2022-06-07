const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('after:screenshot', details => {
        console.log(details.path)
      })
    },
  },
});
