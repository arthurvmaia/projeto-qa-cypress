import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import localAppPage from "../../pages/localApp.page.js";

Given('que o usuario esta na pagina de teste local', () => {
  localAppPage.visitar();
});

When('o usuario insere credenciais validas', () => {
  localAppPage.preencherCredenciais('cypress', 'teste123');
});

When('o usuario insere credenciais invalidas', () => {
  localAppPage.preencherCredenciais('usuario', 'errado');
});

When('clica em Login', () => {
  localAppPage.clicarLogin();
});

Then('a mensagem de {string} deve ser exibida', (mensagem) => {
  const tipo = mensagem.includes('Bem-vindo') ? 'success' : 'error';
  localAppPage.validarMensagem(mensagem, tipo);
});

When('o usuario insere credenciais validas de um arquivo', () => {
  cy.fixture('usuarios').then((dados) => {
    localAppPage.preencherCredenciais(dados.usuarioValido.nome, dados.usuarioValido.senha);
  });
});

Then('a mensagem de boas-vindas deve ser exibida conforme o arquivo', () => {
  cy.fixture('usuarios').then((dados) => {
    localAppPage.validarMensagem(dados.usuarioValido.mensagem, 'success');
  });
});