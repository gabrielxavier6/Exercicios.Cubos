const paises = ['brasil', 'alemanha', 'espanha', 'argentina', 'eua']
paises.push('eua');
console.log(paises);

paises.pop();
console.log(paises);

paises.unshift('eua');
console.log(paises);

paises.shift();
console.log(paises);

const ultimo = paises[paises.length - 1];
console.log(ultimo);

console.log(paises[1]);

console.log(paises[2]);
