async function listaVideos() {
  const apiKey = '';
  fetch('/api/index')
  .then(response => response.json())
  .then(data => apiKey = data);

  const conexao = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=pt-BR&api_key=${apiKey}`);
  const conexaoConvertida = await conexao.json();
  
  return conexaoConvertida.results;
}

export const conectaApi = {
  listaVideos
}
