import { conectaApi } from "./conectaApi.js";
import { filmesFavoritos } from "./filmesFavoritos.js";
import mostrarFilmesFavoritos from "./mostrarFilmesFavoritos.js";

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
                <label class="favoritar">
                    <input type="checkbox" class="checkbox-heart">
                    <img src="img/Heart.svg" alt="" class="heart-image">
                    <span class="texto-favoritar">Favoritar</span>
                </label>
            </div>
        </div>
        <span class="descricao">
            ${filme.overview}
        </span>
    `;

    const favoritos = filmesFavoritos.retornaFilmesFavoritos();
    const favorito = favoritos.filter(filmeCurtido => filmeCurtido.id === filme.id)[0];
    const checkboxHeart = divFilme.querySelector('.checkbox-heart');

    const heartImage = divFilme.querySelector('.heart-image');
    if(favorito){
        heartImage.src = 'img/Vector.svg';
        checkboxHeart.checked = true;
    } else {
        heartImage.src = 'img/Heart.svg';
        checkboxHeart.checked = false;
    }

    checkboxHeart.addEventListener('click', evento => {
        if(evento.target.checked) {
            heartImage.src = 'img/Vector.svg';
            filmesFavoritos.salvarFilmeCurtido(filme);
        } else {
            heartImage.src = 'img/Heart.svg';
            filmesFavoritos.removerFilmeCurtido(filme);
            const checkboxFavoritos = document.querySelector('.checkbox-favoritos');
            if(checkboxFavoritos.checked){
                mostrarFilmesFavoritos();
            }
        }
    })

    return divFilme;
}

export async function listaFilmes(filtro = '') {
    try {
        const listaApi = await conectaApi.listaFilmes();

        const filmes_filtrados = listaApi.filter(filme => {
            return filme.title.toLowerCase().includes(filtro.toLowerCase());
        })

        while(sectionFilmes.firstChild) {
            sectionFilmes.removeChild(sectionFilmes.firstChild);
        }

        filmes_filtrados.forEach(filme => {
            sectionFilmes.appendChild(constroiCard(filme));
        });
    } catch {
        sectionFilmes.innerHTML = `<h2>Não foi possível carregar a lista de vídeos<h2>`;
    }
}

listaFilmes();
