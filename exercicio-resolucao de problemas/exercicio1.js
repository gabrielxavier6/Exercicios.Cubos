const stringCorrompido = ['!', '@', '#', '$', '&', '*', '(', ')'];
let dadoPurificado = 'canisl@u';

for (let caractere of stringCorrompido);
if (caractere === '!' || caractere === '@' || caractere === '#' || caractere === '$' || caractere === '&' || caractere === '*' || caractere === '(' || caractere === ')') { // ignorar
} else {
    dadoPurificado = dadoPurificado + caractere;

}


console.log(dadoPurificado);
