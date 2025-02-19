import { defineConfig } from "cypress"
import { beforeRunHook, afterRunHook } from 'cypress-mochawesome-reporter/lib/index.js';

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {   
    baseUrl:'https://qauto.forstudy.space',
        setupNodeEvents(on, config) {
          on('before:run', async (details) => {
            await beforeRunHook(details);
          });
    
          on('after:run', async () => {
            await afterRunHook();
          });
        },
    
      
    //retries: {
    // runMode: 2,
    //openMode: 2
    //},

    modifyObstructiveCode: false,  
    defaultCommandTimeout: 40000,
    viewportWidth: 1280,
    viewportHeight: 1024,
    video: true,
    screenshotOnRunFailure: true,
  }
   });
