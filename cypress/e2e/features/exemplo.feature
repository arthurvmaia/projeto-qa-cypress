Feature: Acessar página do gov.br

  Scenario: Verificar o título da página
    Given que o usuário acessa a página do gov.br
    Then o título da página deve conter "gov.br"
