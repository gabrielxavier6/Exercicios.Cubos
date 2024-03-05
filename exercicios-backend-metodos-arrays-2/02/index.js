const palavras = ["livro", "caneta", "sol", "carro", "orelha"];
let existePalavraInvalida = false;

for (let i = 0; i < palavras.length; i++) {
    if (palavras[i].length > 5) {
        existePalavraInvalida = true;
        break;
    }
}

if (existePalavraInvalida) {
    console.log("existe palavra inválida");
} else {
    console.log("array validado");
}
