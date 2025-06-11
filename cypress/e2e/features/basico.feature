Feature: Navegação básica no site gov.br

  Scenario: Verificar elementos básicos da página
    Given que acesso a página do gov.br
    When a página carregar completamente
    Then devo ver o título da página
    And devo ver o campo de busca
    And devo ver o menu principal