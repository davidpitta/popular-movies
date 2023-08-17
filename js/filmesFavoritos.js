function retornaFilmesFavoritos() {
    return JSON.parse(localStorage.getItem("filmesFavoritos")) || [];
}

function salvarFilmeCurtido(filme) {
    const filmesFavoritos = retornaFilmesFavoritos();

    filmesFavoritos.push(filme);

    localStorage.setItem('filmesFavoritos', JSON.stringify(filmesFavoritos));
}

function removerFilmeCurtido(filme) {
    const filmesFavoritos = retornaFilmesFavoritos();

    filmesFavoritos.splice(filmesFavoritos.findIndex(elemento => elemento.id === filme.id), 1);

    localStorage.setItem('filmesFavoritos', JSON.stringify(filmesFavoritos));
}

export const filmesFavoritos = {
    retornaFilmesFavoritos,
    salvarFilmeCurtido,
    removerFilmeCurtido
}
