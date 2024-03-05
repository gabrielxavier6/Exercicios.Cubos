const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

// Filtrar programadores com mais de 20 anos
const programadoresMaioresDe20 = pessoas.filter(pessoa => pessoa.profissao === "Programador" && pessoa.idade > 20);

console.log(programadoresMaioresDe20);

// Filtrar jornalistas com mais de 30 anos
const jornalistasMaioresDe30 = pessoas.filter(pessoa => pessoa.profissao === "Jornalista" && pessoa.idade > 30);

console.log(jornalistasMaioresDe30);

// Filtrar jornalistas e programadores jovens (até 29 anos)
const jornalistasEProgramadoresJovens = pessoas.filter(pessoa => (pessoa.profissao === "Jornalista" || pessoa.profissao === "Programador") && pessoa.idade <= 29);

console.log(jornalistasEProgramadoresJovens);
