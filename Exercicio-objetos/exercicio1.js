const pessoa = {
    nome: 'Gabriel',
    idade: 19,
    altura: 1.75,
    apelido: ['Xavi', 'Xavier'],
    possuiCnh: true
}
if (pessoa.possuiCnh === true) {
    pessoa.possuiCnh = 'possui CNH';
} else {
    pessoa.possuiCnh = 'nao possui CNH';
}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos,
${pessoa.altura}m de altura,
${pessoa.possuiCnh}
e os seguintes apelidos 
${pessoa.apelido[0]} e ${pessoa.apelido[1]}`);


