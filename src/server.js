// Importar dependência
const express = require('express');
const path = require('path');
const pages = require('./pages.js');

// Iniciando o express
const server = express()
server
    //  Utilizar body do req
    .use(express.urlencoded({extended: true}))

    // Utilizando os arquivos estáticos
    .use(express.static('public')) // Todas as rotas dentro do public criada

    // Configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // Rotas da aplicação 
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)
// Ligar o servidor
server.listen(5500) 