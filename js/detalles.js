window.onload = function() {
var queryString = new URLSearchParams(location.search);

var idSerie = queryString.get('idSerie');

var urlFija = "https://image.tmdb.org/t/p/original/";

function createItemHtml(clase, titulo, imagen, idSerie) {

  serie = '<li class="'+ clase + '">'
  serie +=     '<a href="detalles.html?idSerie='+idSerie+'&nombreSerie='+titulo+'" >'
  serie +=      '<h2>'+ titulo +'</h2>'
  serie +=      '<img src="'+ imagen +'" alt="">'
  serie +=    '</a>'
  serie +=  '</li>';

  return serie;
}


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
      var html = `<h1>${titulo}</h1>`
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

    var urlTrailers = "https://api.themoviedb.org/3/tv/"+idSerie+"/videos?api_key=81abb78b34be12fc4620b0a001276f5a&language=en-US"

      fetch (urlTrailers)
        .then(function(response) {
          return response.json();
        })
        .then(function (resultados) {
          console.log(resultados);
          var arrayKeys = resultados.results
          var trailer = ''
          for (var i = 0; i < arrayKeys.length; i++) {
            console.log(arrayKeys[i].key);

            trailer += '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+arrayKeys[i].key+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

          }
          document.querySelector(".trailers").innerHTML = trailer;
       })

    var urlRecomendaciones = "https://api.themoviedb.org/3/tv/"+idSerie+"/recommendations?api_key=81abb78b34be12fc4620b0a001276f5a&language=en-US&page=1"
    fetch(urlRecomendaciones)
      .then(function(response) {
        return response.json();
      })
      .then(function(resultados) {
        console.log(resultados);
        var recoContainer = document.querySelector(".reco");
          for (var i = 0; i < resultados.results.length; i++) {
            titulo = resultados.results[i].name
            img_src = urlFija + resultados.results[i].poster_path

            var serie = createItemHtml("reco-items", titulo, img_src, resultados.results[i].id) ;
            recoContainer.innerHTML += serie
          }

        })

var sectionReco = document.querySelector(".sectionReco")
var recoBoton = document.getElementById("recomendacionesBoton")
  recoBoton.onclick = function onclick(){
  sectionReco.style.display = "block";
  console.log(sectionReco);
  console.log(recoBoton);
  
}
};

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
