class LocalAppPage {

  visitar() {
    // Visita o arquivo HTML local
    cy.visit('cypress/fixtures/app.html');
  }

  preencherCredenciais(usuario, senha) {
    cy.get('#username').clear().type(usuario);
    cy.get('#password').clear().type(senha);
  }

  clicarLogin() {
    cy.get('#login-button').click();
  }

  validarMensagem(mensagem, tipo) {
    // tipo pode ser 'success' ou 'error'
    cy.get('#status')
      .should('have.class', tipo)
      .and('have.text', mensagem);
  }
}

export default new LocalAppPage();