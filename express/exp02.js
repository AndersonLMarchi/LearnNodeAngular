const express = require('express');
const server = express();

server.get('/', function(req, res, next) {
    console.log('Iniciando...');    
    next();
    console.log('Finalizando...');
});

server.get('/', function(req, res) {
    console.log('Executando...');    
    res.send('<h1>Executou o express com cadeia de responsabilidade!</h1>');
});


server.listen(3000, () => console.log('Lendo porta 3000'));
