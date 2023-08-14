import { filmes } from "./main.js";

const sectionFilmes = document.querySelector('.filmes');

export default function constroiCard(filme) {
    const divFilme = document.createElement('div');
    divFilme.classList.add('filme');

    divFilme.innerHTML = `
        <img src="${filme.image}" alt="Banner do filme ${filme.title}" class="imagem-filme">
        <div class="informacoes">
            <h4 class="titulo-filme">${filme.title + ' (' + filme.year + ')'}</h4>
            <div class="avaliacao-favoritar">
                <div class="avaliacao">
                    <img src="img/Star.svg" alt="">
                    <span class="nota">${filme.rating}</span>
                </div>
                <div class="favoritar">
                    <img src="${filme.isFavorited ? 'img/Vector.svg' : 'img/Heart.svg'}" alt="">
                    <span class="texto-favoritar">Favoritar</span>
                </div>
            </div>
        </div>
        <span class="descricao">
            ${filme.description}
        </span>
    `

    return divFilme;
}

function listaFilmes() {
    while(sectionFilmes.firstChild) {
        sectionFilmes.removeChild(sectionFilmes.firstChild);
    }

    filmes.forEach(filme => {
        sectionFilmes.appendChild(constroiCard(filme));
    });
}

listaFilmes();

export const mostraFilme = {
    constroiCard,
    listaFilmes
}
