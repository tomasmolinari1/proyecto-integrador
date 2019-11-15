function queryTMDB(search) {
    return fetch ("https://api.themoviedb.org/3/tv/62286/recommendations?api_key=81abb78b34be12fc4620b0a001276f5a&page=1")
      .then(function(response) {
        return response.json();
      })
  }
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
//
//
// Además, debe haber un botón que diga “Ver Recomendaciones”. Al clickear en este botón debe cargarse una sección (que a priori no está o aparece oculta) que muestra un listado de series recomendadas (según la serie que uno esté viendo).
