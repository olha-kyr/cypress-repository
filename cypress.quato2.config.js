import { defineConfig } from "cypress"
import { beforeRunHook, afterRunHook } from 'cypress-mochawesome-reporter/lib/index.js';

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: 'https://guest:welcome2qauto@qauto2.forstudy.space',
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        await beforeRunHook(details);
      });

      on('after:run', async () => {
        await afterRunHook();
      });
  },

  env: {
      QAUTO2_USER_EMAIL: "olhakyrychenko21+User1@gmail.com",
      QAUTO2_USER_PASSWORD: "Italia@mechta1",
    }
  }
}
);
