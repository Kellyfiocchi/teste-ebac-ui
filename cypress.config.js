const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'syfh5y',
  e2e: {
    baseUrl: 'http://lojaebac.ebaconline.art.br'
  },
});
