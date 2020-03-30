<h3 align="center">
  Projeto realizado para uma vaga de estágio na Vix Tecnologia
</h3>

## Funcionalidades

- Autenticação
- Visualização dos usuários cadastrados
- Cadastrar novo usuário
- Editar e deletar usuário cadastrado

## Como usar

Requisitos:

- Yarn || Npm
- [Back-end] da aplicação rodando
  - Esse projeto usa PostgreSQL, recomendo que use Docker para instalar e rodar a base de dados
  -  Copie o conteúdo de .env.example e defina as variaveis de ambiente
  > cp .env.example .env

Após a instalação do banco de dados e inicialização do backend com o comando 
- Yarn dev


### Mobile

Instale o react-native-cli
Nesse projeto estou utilizando o emulador genymotion, caso queira usa-lo também, segue uma documentação com o passo a passo de instalação:

https://docs.rocketseat.dev/ambiente-react-native/introducao

##### Lembrando que caso não for utilizar genymotion, o ip de conexão com a API via axios deve ser alterado de acordo com o ambiente em que a aplicação será emulada.
- Ex: No iphone a baseURL da api pode ser http://localhost:3333, o android não consegue utilizar diretamente localhost.
Caso esteja em um ambiente do proprio android studio use: http://10.0.2.2:3333
Caso esteja emulando o genymotion a baseURL que ja esta configurada ira se manter
Se estiver emulando via usb a baseURL será o ip da sua rede Ex: http://192.168.X.X:3333

Feito isso:

Utilize: 
> react-native run-android ou yarn android

Caso esteja emulando em IOS

> react-native run-ios ou yarn ios

Após instalada a aplicação em seu emulador utilize um dos comandos para startar a aplicação 

> react-native start || yarn start



Feito por Thiago. [Veja meu linkedin!](https://www.linkedin.com/in/thiagoduda/)
