# 📌 Gerenciamento de Usuários

Este projeto é uma aplicação full-stack para cadastro, listagem, edição e exclusão de usuários. O front-end foi desenvolvido com React, enquanto o back-end foi construído com Java e Spring Boot, utilizando um banco de dados MySQL.

#🛠 Tecnologias Utilizadas

- **Front-end:** React.js

- **Back-end:** Java com Spring Boot

- **Banco de Dados:** MySQL

# 📁 Como baixar o projeto?

``# Clonar o repositório
git clone SEU_REPOSITORIO_AQUI``

#🚀 Como rodar o projeto?

#📌 Back-end

1. Certifique-se de que o MySQL está rodando na porta **3306**.

2. Configure o banco de dados com o nome **Cadastro**.

3. Execute a aplicação Java. O servidor será iniciado na porta **3000**.

#📌 Front-end

1. Acesse a pasta do front-end e instale as dependências:

   ``cd frontend npm install``

2. Inicie o projeto:
   ``npm start``

3. Acesse no navegador: http://localhost:3000

#💻 Endpoints da API

# 📌 Cadastrar Usuário
- **Método HTTP:** POST

- **Endpoint:** /usuarios

- **Parâmetros do corpo da requisição (JSON):**

``{
  "nome": "string",
  "cpf": "string",
  "cep": "string",
  "logradouro": "string",
  "bairro": "string",
  "cidade": "string",
  "estado": "string"
}``


#📌 Listar Usuários
**Método HTTP:** GET

**Endpoint:** /usuarios

**Exemplo de requisição CURL:**

``curl -X GET "http://localhost:3000/usuarios"``


# 📌 Buscar Usuário por CPF
**Método HTTP:** GET

**Endpoint:** /usuarios/{cpf}

**Exemplo de requisição CURL:**

``curl -X GET "http://localhost:3000/usuarios/12345678900"``


# 📌 Editar Usuário
**Método HTTP:** PUT

**Endpoint:** /usuarios/{cpf}

**Parâmetros do corpo da requisição (JSON):**

``{
  "nome": "string",
  "cep": "string",
  "logradouro": "string",
  "bairro": "string",
  "cidade": "string",
  "estado": "string"
}
``


**Exemplo de requisição CURL:**

``curl -X PUT "http://localhost:3000/usuarios/12345678900" ``
``-H "Content-Type: application/json" -d '{ "nome": "João Silva", "cep": "01002000", "logradouro": "Rua Y", "bairro": "Centro", "cidade": "São Paulo", "estado": "SP"}'``


# 📌 Excluir Usuário

**Método HTTP:** DELETE

**Endpoint:** /usuarios/{cpf}

**Exemplo de requisição CURL:**
``curl -X DELETE "http://localhost:3000/usuarios/12345678900"``


# 📄 Documentação

**A API pode ser testada diretamente no navegador através do Swagger:**

http://localhost:3000/swagger-ui.html


