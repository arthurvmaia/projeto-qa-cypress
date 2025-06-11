# language: pt
Funcionalidade: Acesso ao portal gov.br

  Cenário: Verificar título, campo de busca e navegação
    Dado que o usuário acessa a página do gov.br
    Quando a página carregar completamente
    Então o título da página deve conter "gov.br"
    E devo ver o campo de busca
    E devo ver o menu principal