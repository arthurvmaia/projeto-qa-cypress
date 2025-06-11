# language: pt
Funcionalidade: Login na Aplicacao de Teste Local

  Cenario: Login com sucesso
    Dado que o usuario esta na pagina de teste local
    Quando o usuario insere credenciais validas
    E clica em Login
    Entao a mensagem de "Bem-vindo, cypress!" deve ser exibida

  Cenario: Login com falha
    Dado que o usuario esta na pagina de teste local
    Quando o usuario insere credenciais invalidas
    E clica em Login
    Entao a mensagem de "Credenciais invalidas!" deve ser exibida

  Cenario: Login com sucesso usando dados de um arquivo
    Dado que o usuario esta na pagina de teste local
    Quando o usuario insere credenciais validas de um arquivo
    E clica em Login
    Entao a mensagem de boas-vindas deve ser exibida conforme o arquivo