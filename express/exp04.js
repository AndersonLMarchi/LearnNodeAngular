const express = require('express');
const server = express();

server.route('/clientes')
    .get((req, res) => res.send('<h3>Lista de Clientes</h3>'))
    .post((req, res) => res.send('<h3>Inclusão de Cliente</h3>'))
    .put((req, res) => res.send('<h3>Alteração de Cliente</h3>'))
    .delete((req, res) => res.send('<h3>Remoção de Cliente</h3>'));

server.listen(3000, () => console.log('Lendo porta 3000'));
