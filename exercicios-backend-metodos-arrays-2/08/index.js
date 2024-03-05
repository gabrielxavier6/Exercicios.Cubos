const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const novoArray = frutas.map((fruta, index) => {

    const frutaFormatada = fruta.charAt(0).toUpperCase() + fruta.slice(1).toLowerCase();

    return `${index} - ${frutaFormatada}`;
});

console.log(novoArray);
