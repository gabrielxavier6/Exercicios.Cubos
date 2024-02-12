// maneira que eu resolvi o exercicio sem ver a resolução

const produtosComprados = [{
    nome: 'arroz',
    preço: 19.90
}, {
    nome: 'feijao',
    preço: 10.90

}];
const cliente = 'gabriel';
let valor = (produtosComprados[0].preço + produtosComprados[1].preços);

console.log(`Por favor ${cliente} comparecer ao caixa 1, o valor a ser pago é de R$${valor} pela compra. `);