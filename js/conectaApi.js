async function listaFilmes() {
  const apiKey = await retornaChave();

  const conexao = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&api_key=${apiKey.apiKey}`);
  const conexaoConvertida = await conexao.json();
  
  return conexaoConvertida.results;
}

async function retornaChave() {
  return fetch('/api/index')
  .then(response => response.json());
}

export const conectaApi = {
  listaFilmes
}
