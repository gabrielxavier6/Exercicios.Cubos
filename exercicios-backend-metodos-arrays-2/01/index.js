const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];
const nomeDoLivro = "Dom Quixote";

function encontrarPosicaoLivro(livros, nomeDoLivro) {
    const posicao = livros.indexOf(nomeDoLivro);
    if (posicao !== -1) {
        return `O livro está na posição ${posicao + 1}`;
    } else {
        return "Livro não encontrado na estante.";
    }
}

console.log(encontrarPosicaoLivro(livros, nomeDoLivro));
