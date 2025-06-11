import 'cypress-iframe';
Cypress.on('uncaught:exception', (err, runnable) => {
  // Impede que erros de JS do próprio site quebrem os testes.
  return false;
});