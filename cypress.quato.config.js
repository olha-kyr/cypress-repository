import { defineConfig } from "cypress"
import { beforeRunHook, afterRunHook } from 'cypress-mochawesome-reporter/lib/index.js';

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {     
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        await afterRunHook();
      });
    },

  baseUrl: 'https://guest:welcome2qauto@qauto.forstudy.space',
       
  env: {
    QAUTO_USER_EMAIL: "olhakyrychenko21+testUser1@gmail.com",
    QAUTO_USER_PASSWORD: "Italia@mechta82",
        }
    }
  }
  );
