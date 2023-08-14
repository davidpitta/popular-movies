import { filmes } from "./main.js";
import { mostraFilme } from "./mostraFilmes.js";

function filmesFavoritos() {
    
    const sectionFilmes = document.querySelector('.filmes');

    while(sectionFilmes.firstChild) {
        sectionFilmes.removeChild(sectionFilmes.firstChild);
    }

    const filmesFavoritos = filmes.filter(filme => filme.isFavorited);
    filmesFavoritos.forEach(filme => sectionFilmes.appendChild(mostraFilme.constroiCard(filme)));
}

const checkboxFavoritos = document.querySelector('.checkbox-favoritos');

checkboxFavoritos.addEventListener('change', evento => {
    if(evento.target.checked) {
        filmesFavoritos();
    } else {
        mostraFilme.listaFilmes();
    }
});
