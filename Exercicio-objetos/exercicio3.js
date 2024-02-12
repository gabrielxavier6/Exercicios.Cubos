const produtosComprados = [{
    nome: 'arroz',
    preço: 19.90,
    quantidade: 2
}, {
    nome: 'feijao',
    preço: 10.99,
    quantidade: 3
}, {
    nome: 'leite',
    preço: 2.99,
    quantidade: 12
}
];

const cartao = {
    nome: "Gabriel",
    idade: 20,
    produtosComprados
};
console.log(cartao.nome);
console.log(cartao.idade);
cartao.idade = 50;
console.log(cartao.idade);
console.log(cartao.produtosComprados[0].nome);
console.log(cartao.produtosComprados[produtosComprados.length - 1].preço);