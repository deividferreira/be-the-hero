const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

/**
 * MÉTODOS HTTP:
 * 
 * GET: Buscar uma recurso no backend
 * POST: Criar um recurso no backend
 * PUT: Alterar um recurso no backend
 * DELETE: Deletar um recurso.
 */

/**
 * TIPOS DE PARAMETROS:
 * 
 * Query: Parametros nomeados enviados na rota após *?*(Usado apra Filtros e paginação);
 * Route Params: Parametros utilizados para identificar um determinado recurso;
 * Request Body: Corpo da requisição (utilizado para criar ou alterar recursos);
 */

/**
 * SQL: MySQL, *SQLite*, PostgreSQL, etc;
 * NoSQL: MongoDB, etc;
 */

/**
 * SQL 'Normal': SELECT * FROM users WHERE ...
 * Query Builder: table('users').select('*').where()....
 */

/**
 * Definições de entidades e funcionalidades da aplicação:
 *  Entidades baseadas no escopo da aplicação:
 *    *ONG
 *    *Caso (incident)
 *  Funcionalidades 
 *    *Login de ONGs
 *    *Logout de ONGs
 *    *Cadastro de ONGs
 *    *Cadastrar novos Casos
 *    *Deletar novos Casos
 *    *Listar Casos especificos de uma ONG
 *    *Listar todos os casos
 *    *Entrar em contato com a ONG
 */

app.listen(3333);