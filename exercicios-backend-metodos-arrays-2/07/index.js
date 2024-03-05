const enderecos = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

function buscarEnderecoPorCEP(cep) {
    const endereco = enderecos.find(endereco => endereco.cep === cep);
    if (endereco) {
        console.log(endereco.rua);
    } else {
        console.log("CEP não encontrado");
    }
}

buscarEnderecoPorCEP(00222444);
