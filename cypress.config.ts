const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200', // Your Angular app URL
    supportFile: false,
  },
});
