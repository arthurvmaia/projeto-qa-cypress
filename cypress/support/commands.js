// Comando para aguardar carregamento da página
Cypress.Commands.add('waitForPageLoad', () => {
  cy.get('body').should('be.visible');
  cy.wait(2000);
});

// Comando para buscar elementos de forma mais flexível
Cypress.Commands.add('findByMultipleSelectors', (selectors) => {
  return cy.get('body').then(($body) => {
    for (const selector of selectors) {
      if ($body.find(selector).length > 0) {
        return cy.get(selector).first();
      }
    }
    throw new Error(`Nenhum dos seletores foi encontrado: ${selectors.join(', ')}`);
  });
});

// Comando para verificar se elemento existe sem falhar
Cypress.Commands.add('elementExists', (selector) => {
  return cy.get('body').then(($body) => {
    return $body.find(selector).length > 0;
  });
});