
window.addEventListener("load", function(){

  var apiKey ="81abb78b34be12fc4620b0a001276f5a";
  var urlFija = "https://image.tmdb.org/t/p/original/";
  var urlGenero = "seriesPorGenero.html?idDeGenero=";

  function queryTMDB() {
    return fetch ("https://api.themoviedb.org/3/discover/tv?api_key=" " + apiKey +" &sort_by=popularity.desc&page=1&with_genres="
")
      .then(function(response) {
        return response.json();
      })
  }
  function createItemHtml(clase, titulo, id) {
    var genre = '<li class="'+ clase + '">'
    genre +=      '<h2><a href="'+ urlGenero + id +'" >'+ titulo +'</a></h2>'
    genre +=  '</li>';

    return genres;
  }

  queryTMDB()
  .then(function(dataTMBD) {
    console.log(dataTMBD);
    var genresContainer = document.querySelector(".series-por-genero")
    var titulo = ""
      console.log(titulo);


    for (var i = 0; i < dataTMBD.genres.length; i++) {


      titulo = dataTMBD.genres[i].name


      seriesPorGeneroContainer.innerHTML += createItemHtml("series-por-genero-item", titulo, dataTMBD.genres[i].id);
    }
    console.log(titulo);
  })

})
