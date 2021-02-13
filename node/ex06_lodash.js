const _ = require('lodash'); 

const alunos = [
    {nome: 'João', nota: 8.4 },
    {nome: 'Maria', nota: 8 },
    {nome: 'Pedro', nota: 8.5 },
];

console.log((_.sumBy(alunos, 'nota') / alunos.length));

