const express = require('express');
const server = express();

server.use('/api', function(req, res, next) {
    console.log('Iniciando...');    
    next();
    console.log('Finalizando...');
});

server.use('/api', function(req, res) {
    console.log('Executando...');    
    res.send('<h1>Executou a API com express e cadeia de responsabilidade!</h1>');
});


server.listen(3000, () => console.log('Lendo porta 3000'));
