import { conectaApi } from "./conectaApi.js";

const sectionFilmes = document.querySelector('.filmes');

export default function constroiCard(filme) {
    const divFilme = document.createElement('div');
    divFilme.classList.add('filme');

    const exp = /-/g;
    const date = new Date(filme.release_date.replace(exp, ','));
    const year = date.getUTCFullYear();

    const imageUrl = `https://image.tmdb.org/t/p/w500${filme.poster_path}`;

    divFilme.innerHTML = `
        <img src="${imageUrl}" alt="Banner do filme ${filme.title}" class="imagem-filme">
        <div class="informacoes">
            <h4 class="titulo-filme">${filme.title + ' (' + year + ')'}</h4>
            <div class="avaliacao-favoritar">
                <div class="avaliacao">
                    <img src="img/Star.svg" alt="">
                    <span class="nota">${filme.vote_average}</span>
                </div>
                <div class="favoritar">
                    <img src="img/Heart.svg" alt="">
                    <span class="texto-favoritar">Favoritar</span>
                </div>
            </div>
        </div>
        <span class="descricao">
            ${filme.overview}
        </span>
    `

    return divFilme;
}

async function listaFilmes() {
    try {
        const listaApi = await conectaApi.listaFilmes();
        listaApi.forEach(filme => {
            sectionFilmes.appendChild(constroiCard(filme));
        });
    } catch {
        sectionFilmes.innerHTML = `<h2>Não foi possível carregar a lista de vídeos<h2>`
    }
}

listaFilmes();
