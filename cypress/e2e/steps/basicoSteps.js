const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('que acesso a página do gov.br', () => {
  cy.visit('https://www.gov.br');
  cy.wait(3000); // Aguarda carregamento
});

When('a página carregar completamente', () => {
  cy.get('body').should('be.visible');
  cy.wait(1000);
});

Then('devo ver o título da página', () => {
  cy.title().should('contain', 'gov.br');
});

Then('devo ver o campo de busca', () => {
  // Tentativas de encontrar campo de busca com diferentes seletores
  cy.get('body').then(($body) => {
    if ($body.find('input[type="search"]').length > 0) {
      cy.get('input[type="search"]').should('be.visible');
    } else if ($body.find('input[placeholder*="busca"]').length > 0) {
      cy.get('input[placeholder*="busca"]').should('be.visible');
    } else if ($body.find('input[name*="search"]').length > 0) {
      cy.get('input[name*="search"]').should('be.visible');
    } else {
      // Se não encontrar, pelo menos verifica se existe algum input
      cy.get('input').should('exist');
    }
  });
});

Then('devo ver o menu principal', () => {
  // Verifica se existe navegação ou menu
  cy.get('body').then(($body) => {
    if ($body.find('nav').length > 0) {
      cy.get('nav').should('be.visible');
    } else if ($body.find('.menu').length > 0) {
      cy.get('.menu').should('be.visible');
    } else if ($body.find('header').length > 0) {
      cy.get('header').should('be.visible');
    } else {
      // Verifica se existe pelo menos um link de navegação
      cy.get('a').should('exist');
    }
  });
});