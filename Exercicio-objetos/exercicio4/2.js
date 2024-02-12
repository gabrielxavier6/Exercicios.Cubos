//maneira que eu resolvi o exercicio 4 apos ver a resolucao


const produtosComprados = [{
    nome: 'arroz',
    preço: 1990,
    quantidade: 2
}, {
    nome: 'feijao',
    preço: 1099,
    quantidade: 3
}, {
    nome: 'leite',
    preço: 299,
    quantidade: 12
}
];

const cartao = {
    nome: "Gabriel",
    idade: 20,
    produtosComprados
};
let totalAPagar = 0;
for (let produto of produtosComprados) {

    totalAPagar += produto.preço * produto.quantidade;
}
const valorFormatado = (totalAPagar / 100).toFixed(2);

console.log(`senhor ${cartao.nome} o total a pagar é R$ ${valorFormatado}`);