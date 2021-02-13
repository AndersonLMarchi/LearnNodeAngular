const http = require('http');
const server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type":"text/html"});
    res.end('<h1>Precisa do express será?</h1>');
});

const porta = 3456;
server.listen(porta, function () {
    console.log(`Escutando porta ${porta}`);
});
