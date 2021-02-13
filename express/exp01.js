const { response } = require('express');
const express = require('express');
const server = express();

server.get('/', function(req, res) {
    res.send('<h1>Hello</h1>');
});

server.all('/teste', function(req, res) {
    res.send('<h1>Hello de Teste</h1>');
});

server.get(/api/, function(req, res) {
    res.send('<h1>Hello de API</h1>');
});

server.listen(3000, () => console.log('Executando'));
