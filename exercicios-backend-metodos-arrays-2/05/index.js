const usuarios = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: false,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];
const filtrar = usuarios.filter(usuarios => usuarios.idade >= 18 && usuarios.idade <= 65);
const validarHab = usuarios.every(usuarios => usuarios.habilitado);

if (!validarHab) {
    console.log("todos precisam estar habilitados")
} else { console.log("todos passaram no teste") }