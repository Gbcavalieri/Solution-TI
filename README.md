📌 GERENCIAMENTO DE USUÁRIOS

Este projeto consiste em um sistema de gerenciamento de usuários, permitindo cadastrar, listar, editar e excluir usuários de forma intuitiva.

O projeto foi desenvolvido utilizando:

Front-end: React

Back-end: Java (Spring Boot)

Banco de Dados: MySQL

📁 Como baixar o projeto?

Clonar o Repositório

$ git clone https://github.com/seu-usuario/seu-repositorio.git
$ cd seu-repositorio

🚀 Como executar o projeto?

Back-end (Porta 3000)

Certifique-se de ter o Java e o MySQL instalados.

Configure o banco de dados MySQL com o nome Cadastro e a porta 3306.

Execute a API Java com o comando:

mvn spring-boot:run

Front-end

Certifique-se de ter o Node.js instalado.

No diretório do projeto, instale as dependências:

npm install

Execute o projeto:

npm start

Acesse no navegador: http://localhost:3000

💻 Endpoints da API

Cadastrar Usuário

Método HTTP: POST

Endpoint: http://localhost:3000/usuarios

Parâmetros do corpo da requisição (JSON):

{
  "nome": "string",
  "cpf": "string",
  "cep": "string",
  "logradouro": "string",
  "bairro": "string",
  "cidade": "string",
  "estado": "string"
}

Exemplo de requisição CURL:

curl -X POST "http://localhost:3000/usuarios" -H "Content-Type: application/json" -d '{ "nome": "João Silva", "cpf": "12345678900", "cep": "01001000", "logradouro": "Rua Exemplo", "bairro": "Centro", "cidade": "São Paulo", "estado": "SP" }'

Listar Usuários

Método HTTP: GET

Endpoint: http://localhost:3000/usuarios

Exemplo de requisição CURL:

curl -X GET "http://localhost:3000/usuarios"

Buscar Usuário por CPF

Método HTTP: GET

Endpoint: http://localhost:3000/usuarios/{cpf}

Exemplo de requisição CURL:

curl -X GET "http://localhost:3000/usuarios/12345678900"

Atualizar Usuário

Método HTTP: PUT

Endpoint: http://localhost:3000/usuarios/{cpf}

Parâmetros do corpo da requisição (JSON):

{
  "nome": "string",
  "cep": "string",
  "logradouro": "string",
  "bairro": "string",
  "cidade": "string",
  "estado": "string"
}

Exemplo de requisição CURL:

curl -X PUT "http://localhost:3000/usuarios/12345678900" -H "Content-Type: application/json" -d '{ "nome": "João Silva", "cep": "01001000", "logradouro": "Rua Exemplo", "bairro": "Centro", "cidade": "São Paulo", "estado": "SP" }'

Excluir Usuário

Método HTTP: DELETE

Endpoint: http://localhost:3000/usuarios/{cpf}

Exemplo de requisição CURL:

curl -X DELETE "http://localhost:3000/usuarios/12345678900"

📄 Documentação

Para visualizar a documentação e testar os endpoints diretamente pelo navegador, acesse:

http://localhost:3000/swagger-ui.html
