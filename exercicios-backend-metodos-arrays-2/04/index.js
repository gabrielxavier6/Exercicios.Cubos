const numeros = [0, 122, 4, 6, 8, 44];

const todosSaoPares = numeros.every(numero => numero % 2 === 0);

if (todosSaoPares) {
    console.log("array válido");
} else {
    console.log("array invalido")
}
