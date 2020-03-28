<h3 align="center">
  Projeto realizado para uma vaga de estágio na Vix Tecnologia
</h3>


<p align="center">

  <a href="https://www.linkedin.com/in/thiagoduda/">
    <img alt="Feito por Thiago Duda">
  </a>

</p>

## :rocket: Sobre o projeto
  Aplicação mobile que conta com uma API com sistema de autenticação e um dashboard onde é possivel cadastrar/editar e deletar usuários. <br>
  Como usuário logado, você terá permissões de editar/deletar e cadastrar novos usuários na aplicação
  </br>
  Para essa aplicação foi utilizado Postgres em ambiente Docker e o ORM utilizado foi o Sequelize.

## :runner: Instalação

```
 // 1 - Git Clone

  // 2 - Em backend: Copie o conteúdo de .env.example e defina as variaveis de ambiente
  cp .env.example .env

  // 2.1 - Inicie o BD (Você precisa ter o docker instalado)

  // 2.2 - Instale as dependencias
  yarn install

  2.3 - Rode a aplicação
  yarn dev

  // 3 - Instalando o projeto mobile (Você precisa ter instalado o react-native-cli)

   // Se você está emulando em um android - rode este comando
   react-native run-android
   // Se está emulando em um sistema iOS - rode este comando
   react-native run-ios

  // 3 - Inicie a aplicação (A API precisa estar rodando localmente)
    yarn start

  // Se possuir algum erro, use
    yarn start --reset-cache

```


---

Feito por Thiago. [Veja meu linkedin!](https://www.linkedin.com/in/thiagoduda/)
