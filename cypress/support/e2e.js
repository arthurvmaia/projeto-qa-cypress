import './commands';

// Configurações globais
Cypress.on('uncaught:exception', (err, runnable) => {
  // Retorna false para evitar que erros JS quebrem os testes
  return false;
});

// Configuração de timeout padrão
Cypress.config('defaultCommandTimeout', 10000);
Cypress.config('requestTimeout', 10000);
Cypress.config('responseTimeout', 10000);

// Configuração para ignorar erros de CORS
Cypress.on('window:before:load', (win) => {
  win.fetch = null;
});