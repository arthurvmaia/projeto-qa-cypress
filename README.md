# Projeto de Automação de Testes BDD com Cypress

Este projeto faz parte da avaliação VA02 da disciplina de Quality Assurance (QA). O objetivo é demonstrar a aplicação de testes automatizados utilizando a metodologia BDD com as ferramentas Cypress, Gherkin e Cucumber.

## Justificativa da Aplicação Alvo

Após tentativas de automação em múltiplos portais governamentais (`TCE-PB`, `IBGE`, `Dados.gov.br`), foram encontrados desafios técnicos intransponíveis (falhas de SSL, iframes dinâmicos e bloqueios de renderização de componentes) que impediam a criação de testes estáveis.

Para garantir a entrega de um projeto de alta qualidade e focar na demonstração do domínio das ferramentas e da metodologia BDD, foi adotada a estratégia de testar uma **aplicação local controlada**, que simula uma tela de login.

## Tecnologias Utilizadas

* **Cypress:** Framework principal de automação.
* **Cucumber:** Ferramenta para interpretar os arquivos Gherkin.
* **Gherkin:** Linguagem para escrita dos cenários de teste em formato BDD.
* **Node.js:** Ambiente de execução.

## Estrutura do Projeto

* `/cypress/e2e/features`: Contém os arquivos `.feature` com os cenários escritos em Gherkin.
* `/cypress/e2e/steps`: Contém os arquivos `.js` que implementam os passos definidos nas features.
* `/cypress/pages`: Contém os Page Objects, que abstraem as interações com as páginas.
* `/cypress/fixtures`: Contém os dados de teste (massa de dados), como o `app.html` (nossa aplicação local) e o `usuarios.json`.

## Como Configurar e Executar o Projeto

### Pré-requisitos

* Ter o [Node.js](https://nodejs.org/) instalado.
* Ter o [Git](https://git-scm.com/) instalado.

### Passos para Execução

1.  **Clonar o repositório:**
    ```bash
    git clone [https://github.com/arthurvmaia/projeto-qa-cypress.git]
    ```

2.  **Navegar para a pasta do projeto:**
    ```bash
    cd [NOME_DA_PASTA_DO_PROJETO]
    ```

3.  **Instalar as dependências:**
    ```bash
    npm install
    ```

4.  **Executar os testes (modo interativo):**
    ```bash
    npx cypress open
    ```
    Na janela do Cypress que abrir, clique no arquivo `loginLocal.feature` para rodar os testes.

## Autor

* **[Arthur Victor Araújo De Almeida Maia-P5A-SISTEMAS PARA INTERNET]**
