const listaDeCompras = ["arroz", "feijão", "carne", "macarrão"];

const possuiBebidaProibida = listaDeCompras.some(item => item === "cerveja" || item === "vodka");

if (possuiBebidaProibida) {
    console.log("revise sua lista, João. Possui bebida com venda proibida!");
} else {
    console.log("tudo certo, vamos às compras!");
}
