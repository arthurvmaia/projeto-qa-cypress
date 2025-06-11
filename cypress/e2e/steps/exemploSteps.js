const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');
import govPage from "../../pages/govPage";

Given("que o usuário acessa a página do gov.br", () => {
  govPage.visitar();
});

Then("o título da página deve conter {string}", (tituloEsperado) => {
  govPage.validarTitulo(tituloEsperado);
});
