var queryString = new URLSearchParams(location.search);

var idSerie = queryString.get('idSerie');
var nombreSerie = queryString.get('nombreSerie');

console.log(idSerie, nombreSerie);

var url = "https://api.themoviedb.org/3/tv/" + idSerie + "?api_key=81abb78b34be12fc4620b0a001276f5a&language=en-US";
fetch (url)
    .then(function(response) {
      return response.json();
    })
    .then(function (resultados) {
      console.log(resultados);

      var contenedorDetalleSerie = document.querySelector('.detalle-serie');
      var imgPath = `https://image.tmdb.org/t/p/original/${resultados.poster_path}`;
      var resenia = resultados.overview;
      var cantEpisodios = resultados.number_of_episodes;
      var titulo = resultados.original_name;
      var lenguaje = resultados.languages;
      var sinopsis = resultados.overview;
      var fechaDeEstreno = resultados.first_air_date;
      var html = `<h1>${nombreSerie}</h1>`
      html +=   `<img src="${imgPath}">`
      html +=  `<h2>${lenguaje}</h2>`
      html +=  `<h2>${sinopsis}</h2>`
      html +=  `<h2>${fechaDeEstreno}</h2>`
      var arrayGeneros = resultados.genres
      for (var i = 0; i < arrayGeneros.length; i++) {
        html +=  `<h2>${arrayGeneros[i].name}</h2>`
      }

      contenedorDetalleSerie.innerHTML = html
    })
    .catch(function (errors) {
      console.log(errors);
    })
// La página de detalle de la serie debe incluir al menos:
// Título de la serie.
// Géneros a los que pertenece.
// Cada género debe linkear a la página 3 que corresponda según el género.
// Lenguaje original.
// Sinopsis.
// Fecha de estreno.
// Poster de la serie (en caso de tener).
// Trailer de la serie (en caso de tener).
// Tener en cuenta que una serie puede o no tener más de un tráiler.
// Además, debe haber un botón que diga “Ver Recomendaciones”. Al clickear en este botón debe cargarse una sección (que a priori no está o aparece oculta) que muestra un listado de series recomendadas (según la serie que uno esté viendo).
