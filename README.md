# pandemia_covid19
Trabalho realizado durante a disciplina Engenharia de Software II. 

# Como executar

## TESTES
 - Abrir o projeto e alterar as credencias do banco no  arquivo "database.js" na pasta "config";
 - Abri o terminal integrado e digitar:
 - >cd api 
 - >yarn sequelize db:create
 - >yarn sequelize db:migrate
 - >yarn test

## API
 - Abrir o projeto e alterar as credencias do banco no  arquivo "database.js" na pasta "config";
 - Abri o terminal integrado e digitar: 
 - >cd api
 - >yarn
 - >yarn sequelize db:create
 - >yarn sequelize db:migrate
 - >yarn dev

## WEB
 - >cd web
 - >yarn
 - >yarn start

# Funcionalidades
 - Listagem de todos pacientes;
 - Listagem de apenas um paciente (por id);
 - Criação de um novo paciente;
 - Atualizar informação de um paciente já criado;
 - Deletar um paciente;

 # Observção
 - É necessário ter Node.JS instalado com NPM ou Yarn atualizado e Banco de Dados PostgreSQL.
