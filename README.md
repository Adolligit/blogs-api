<h1 align="center">Blogs API</h1>

<p align="justify">
    Blogs API é uma API Rest que simula o gerenciamento de conteúdo de um Blog. Os conteúdo são exclusivamente postagens, que são criadas pelos usuários cadastrados e autenticados.
</p>
<p align="justify">
    Um usuário recém criado, só poderá criar uma nova postagem ao fazer Login e receber o token de autenticação. Desta forma, ele poderá usufruir também de todos os outros recursos que esta API oferece.
</p>
<p align="justify">
    A API foi criada com <b>JavaScript (Node.js)</b>, utilizando o framework minimalista <b>Express.js</b> e se conectando ao banco de dados <b>MySQL</b> através do ORM <b>Sequelize.js</b>. Há também a utilização da biblioteca <b>JOI</b> para validação de estrutura de dados recebida na requisição e o <b>JWT</b> para geração do token para autenticação de usuário. 
</p>

## Como eu faço para executar este projeto?

Primeiro faça o clone e navegue até a pasta do projeto:

```bash
git clone git@github.com:Adolligit/blogs-api.git && cd blogs-api/
```

### Instalação

<p align="justify">
🚨 As versões descritas nas instalações são <b>fortemente recomendadas</b>. No entanto, caso queira tentar em uma versão diferente, considere a possível aparição de erros durante a execução do projeto.


Escolha uma das instalações a seguir:
</p>
<details>
  <summary>Instalar com Docker 🐳</summary>
  <b>Requisitos</b>
  <br>Você deve possuir as seguintes ferramentas:
<ul>
    <li>Docker: v24</li>
    <li>Docker Compose: v2.19</li>
</ul>

  2. Crie e inicie os contêiners:
  ```bash
  docker compose up -d
  ```
  3. Entre no contêiner da aplicação:
  ```bash
  docker exec -it blogs_api bash
  ```
  ---
</details>

<details>
  <summary>Instalar localmente 💻</summary>
  <b>Requisitos</b>
  <br>Você deve possuir as seguintes ferramentas:
<ul>
    <li>npm: v9.8.0</li>
    <li>Node.js: v20.5</li>
    <li>MySQL: v8</li>
</ul>

1. Renomeie o arquivo **.env.example** na pasta raiz para **.env**
    ```bash
    mv .env.example .env
    ```
2. Abra o arquivo **.env** e então, somente edite os valores da seguintes chaves:
    ```bash
    #api
    ...
    JWT_SECRET=

    #db
    ...
    MYSQL_USER=
    MYSQL_PASSWORD=
    ```
3. Salve o arquivo!
  ---
</details>

### Execução

<table>
    <tr>
        <th>Comando</th>
        <th>Descrição</th>
    </tr>
    <tr>
        <td>npm install</td>
        <td>Instalar as dependências do projeto</td>
    </tr>
    <tr>
        <td>npm run prestart</td>
        <td>Criar o banco de dados MySQL e suas tabelas</td>
    </tr>
    <tr>
        <td>npm run seed</td>
        <td>Popular o banco de dados</td>
    </tr>
    <tr>
        <td>npm start</td>
        <td>Iniciar o projeto</td>
    </tr>
    <tr>
        <td>npm run dev</td>
        <td>Inciar o projeto em modo de desenvolvimento (nodemon)</td>
    </tr>
    <tr>
        <td>npm run lint</td>
        <td>Executar o <b>ESLint</b> para verificar os erros de código estático</td>
    </tr>
    <tr>
        <td>npm run reset</td>
        <td>Recriar o banco de dados já populado</td>
    </tr>
    <tr>
        <td>npm run drop</td>
        <td>Deletar o banco de dados</td>
    </tr>
</table>

## Quais são as rotas desta API?
Deixei uma documentação feita com [Swagger UI](https://swagger.io/tools/swagger-ui/) para facilitar e lhe orientar no uso da API. Você poderá acessa-la clicando **[aqui](http://127.0.0.1:3000/v1/docs/)**.
<img align="center" alt="gif de demonstração de uso" src="https://raw.githubusercontent.com/Adolligit/blogs-api/main/img/1.gif">

## Como estão organizadas as tabelas?
Gerei este DER para facilitar a visualização da estrutura do banco de dados. Desta forma fica mais fácil saber como esta o relacionamento entre as entidades. Confira:
<img align="center" alt="DER" src="https://raw.githubusercontent.com/Adolligit/blogs-api/main/img/1ss.png">

## Erros comuns
Descrevo neste tópico alguns possíveis erros que você pode estar enfrentando durante a instalação ou execução desta API.

Uma das opções descritas no erro poderá resolver o problema que você esta enfrentando. Contudo, caso ainda permaneça com dificuldade para testar a API, me envie um e-mail: adelson.onod@gmail.com.

Antes de prosseguir, por favor confirme que:
- Docker 🐳
  - Você tem instalado em sua máquina o Docker e o Docker Compose nas versões mínimas exigidas.
  - Verificou que a Docker Engine esta funcionando corretamente na minha máquina.
- Localmente 💻
  - Você tem instalado em minha máquina o MySQL, Node.js e NPM nas versões mínimas exigidas.
  - Verificou que o MySQL esta funcionando corretamente na minha máquina.


### Possíveis erros de instalação e execução:
<details>
  <summary>Erro ao subir os contêiners: <b>docker compose up -d</b></summary>
  <img align="center" alt="docker-error" src="https://raw.githubusercontent.com/Adolligit/blogs-api/main/img/2sse.png">

  Você esta tentando subir os contêiners do Docker porém uma das portas já está em uso. Pode ser o banco de dados ou a API com este erro.

  As portas descritas para uso no **docker-compose.yml** são:
  - API: **3000**
  - Banco: **3307**

  Para resolver isso, você pode:
  - Desativar os programas que estão fazendo uso destas portas; OU
  - Alterar o valor para as portas no arquivo **docker-compose.yml**, em:
    - **ports** (para db e node): as portas da máquina local são descritas no lado esquerdo.
</details>
<details>
  <summary>Erro durante a instalação de dependências: <b>npm install</b></summary>
  <img align="center" alt="npm-install" src="https://raw.githubusercontent.com/Adolligit/store-manager/main/img/3sse.png">

  O NPM não encontrou o arquivo 'package.json' na pasta de execução. Você pode ter excluído sem querer ou pode estar executando o comando fora da pasta do projeto.

  Para resolver isso, você pode:
  - Verificar se esta na pasta do projeto. Se não tiver, basta entrar e executar o comando `npm install`; OU
  - Baixar o `package-lock.json` e o `package.json`, depois colar na pasta do projeto:
    - https://github.com/Adolligit/blogs-api/blob/main/package-lock.json;
    - https://github.com/Adolligit/blogs-api/blob/main/package.json.
</details>
<details>
  <summary>Erro ao tentar popular o banco de dados ou ele não foi reconhecido</summary>
  <img align="center" alt="npm-seed" src="https://raw.githubusercontent.com/Adolligit//main/img/4sse.png">

  Este erro significa que não há criado o banco de dados 'blogs-api-test'. 

  Para resolver isso você deve:
  - Executar o comando `npm run prestart` (acho que você esqueceu disso lá nos comando acima).
</details>

<!-- ## Linguagens e ferramentas:
<div>
    <a href="https://swagger.io/tools/swagger-ui/"><img align="center" alt="NodeJs" height="45" width="45" src="https://camo.githubusercontent.com/96e43701d83561899724a89d71187445b7b8f4fe84518a3ea5bec8f85bd207bf/68747470733a2f2f63646e2e737667706f726e2e636f6d2f6c6f676f732f737761676765722e737667"></a>
    <a href="https://nodejs.org/en/"><img align="center" alt="NodeJs" height="45" width="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"></a>
    <a href="https://expressjs.com/pt-br/"><img align="center" alt="Express" height="45" width="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"></a>
    <a href="https://mochajs.org/"><img align="center" alt="Mocha" height="45" width="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg"></a>
    <a href="https://www.chaijs.com/"><img align="center" alt="Chai" height="45" width="45" src="https://cdn.icon-icons.com/icons2/2699/PNG/512/chaijs_logo_icon_168435.png"></a>
    <a href="https://sinonjs.org/"><img align="center" alt="Sinon" height="45" width="45" src="https://avatars.githubusercontent.com/u/6570253?s=280&v=4"></a>
    <a href="https://dev.mysql.com/doc/"><img align="center" alt="NodeJs" height="45" width="66" src="https://upload.wikimedia.org/wikipedia/labs/8/8e/Mysql_logo.png"></a>
    <a href="https://docs.docker.com/"><img align="center" alt="NodeJs" height="45" width="45" src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png"></a>
</div>

## Agradecimento
<p align="justify">
Com este projeto tive a oportunidade de trabalhar com camadas na construção da API Rest e utilizar a técnica de <b>TDD</b>, cobrindo parte do desenvolvimento com testes unitários.
</p>

<p align="justify">
E nada disso seria possível se não houvesse a idealização do projeto, portanto, agradeço a <a href="https://github.com/tryber">@tryber</a> pelo cuidado em trazer um projeto que nos desafia (nos alunos), a colocar em prática todos os nossos conhecimento em programação. 
</p> -->