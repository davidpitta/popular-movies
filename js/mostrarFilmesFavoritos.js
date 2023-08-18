import { filmesFavoritos } from "./filmesFavoritos.js";
import constroiCard, { listaFilmes } from "./mostraFilmes.js";

const checkboxFavoritos = document.querySelector('.checkbox-favoritos');

checkboxFavoritos.addEventListener("click", evento => {
    if(evento.target.checked) {
        mostrarFilmesFavoritos();
    } else {
        listaFilmes();
    }
});

export default function mostrarFilmesFavoritos() {
    const sectionFilmes = document.querySelector('.filmes');
    while(sectionFilmes.firstChild) {
        sectionFilmes.removeChild(sectionFilmes.firstChild);
    }

    const favoritos = filmesFavoritos.retornaFilmesFavoritos();
    if(favoritos.length > 0){
        favoritos.forEach(filme => {
            sectionFilmes.appendChild(constroiCard(filme));
        });
    } else {
        sectionFilmes.innerHTML = `<h2>Não há filmes favoritos<h2>`;
    }
}
