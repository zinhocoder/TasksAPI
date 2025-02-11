# TasksAPI - API de Gerenciamento de Tarefas

A **TasksAPI** é uma API desenvolvida com Node.js e MongoDB que oferece um sistema simples e eficiente para o gerenciamento de tarefas. A API permite que usuários se registrem, façam login e gerenciem suas tarefas de forma segura, utilizando JWT (JSON Web Tokens) para autenticação.

## Funcionalidades

- **Registro de Usuários**: Criação de novos usuários fornecendo nome de usuário, e-mail e senha.
- **Login de Usuários**: Autenticação de usuários com e-mail e senha, gerando um token JWT para sessões seguras.
- **Gerenciamento de Tarefas**: CRUD (Criar, Ler, Atualizar e Excluir) de tarefas associadas a um usuário autenticado.
- **Documentação da API**: A API é documentada via Swagger, facilitando a integração e uso dos endpoints.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para criação de servidores e APIs em Node.js.
- **MongoDB**: Banco de dados NoSQL para armazenamento de dados de usuários e tarefas.
- **JWT (JSON Web Tokens)**: Para autenticação e autorização de usuários.
- **Swagger**: Para documentação interativa da API.

## Como Rodar a API

### 1. Clonar o Repositório

Clone este repositório para o seu ambiente local utilizando o comando:

```bash
git clone https://github.com/seu-usuario/TasksAPI.git

2. Instalar Dependências
Acesse o diretório do projeto e instale as dependências com o comando:

bash
cd TasksAPI
npm install

3. Configurar as Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:

env
PORT=5000
MONGO_URI=mongodb://localhost:27017/tasksapi
JWT_SECRET=sua-chave-secreta
PORT: A porta na qual a API será executada (padrão: 5000).
MONGO_URI: A URL de conexão com o MongoDB. Caso utilize um banco de dados remoto, substitua o localhost pelo IP ou URL do seu servidor MongoDB.
JWT_SECRET: Uma chave secreta para assinar os tokens JWT. Substitua por uma chave única e segura.

4. Iniciar o Servidor
Após configurar as variáveis de ambiente, inicie o servidor com o comando:

bash
npm start
O servidor estará disponível em http://localhost:5000 (ou na porta configurada).

5. Acessar a Documentação da API
A documentação interativa da API está disponível via Swagger. Após iniciar o servidor, acesse:

bash
http://localhost:5000/api-docs
Aqui você poderá explorar todos os endpoints da API, com exemplos de requisições e respostas.

Endpoints

Registro de Usuário
Método: POST /api/auth/register
Descrição: Registra um novo usuário fornecendo nome de usuário, e-mail e senha.
Exemplo de corpo da requisição:

json
{
  "username": "joao_silva",
  "email": "joao.silva@exemplo.com",
  "password": "senha123"
}

Login de Usuário
Método: POST /api/auth/login
Descrição: Realiza login com e-mail e senha e retorna um token JWT.
Exemplo de corpo da requisição:

json
{
  "email": "joao.silva@exemplo.com",
  "password": "senha123"
}

Tarefas
Métodos: GET, POST, PUT, DELETE para listar, criar, editar e excluir tarefas.
Exemplo de corpo da requisição para criar uma tarefa:

json
{
  "title": "Comprar leite",
  "description": "Ir ao mercado e comprar leite",
  "status": "pendente"
}

Contribuindo

Sinta-se à vontade para contribuir com este projeto! Para isso, siga os seguintes passos:
Faça um fork deste repositório.
Crie uma nova branch (git checkout -b minha-nova-feature).
Faça suas modificações e commit (git commit -am 'Adicionando nova funcionalidade').
Envie para o repositório remoto (git push origin minha-nova-feature).
Abra um Pull Request.

### Explicação:

- **Introdução**: Explica o que a API faz e oferece uma visão geral do sistema.
- **Tecnologias**: Lista as principais tecnologias usadas no desenvolvimento da API.
- **Passo a Passo para Rodar a API**: Instruções claras para rodar o projeto localmente, incluindo configuração do banco de dados e variáveis de ambiente.
- **Endpoints**: Detalhes dos endpoints principais para facilitar o uso da API.
- **Contribuição**: Orientações para quem deseja contribuir com o projeto.
