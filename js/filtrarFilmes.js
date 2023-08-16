import { listaFilmes } from "./mostraFilmes.js";

const busca = document.querySelector('.campo-busca');
busca.addEventListener("keyup", evento => {
    evento.preventDefault();
    listaFilmes(evento.target.value);
});
