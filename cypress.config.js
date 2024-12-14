const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://example.cypress.io',
    modifyObstructiveCode: false,  
    defaultCommandTimeout: 40000,
    viewportWidth: 1280,
    viewportHeight: 1024,
    video: true,
    screenshotOnRunFailure: true,
    retries: {
      runMode: 2,
      openMode: 3

    }    
    },
   
});
