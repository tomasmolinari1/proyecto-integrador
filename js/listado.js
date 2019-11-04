window.addEventListener("load", function(){


  //api de series populares
  var apiKey ="81abb78b34be12fc4620b0a001276f5a";
  var urlFija = "https://image.tmdb.org/t/p/original/";

  function queryTMDB() {
    return fetch ("https://api.themoviedb.org/3/genre/tv/list?api_key=" + apiKey + "&language=en-US&page=1")
      .then(function(response) {
        return response.json();
      })
  }
  function createItemHtml(clase, titulo) {
    var genre = '<article class="'+ clase + '">'
    genre +=      '<h2>'+ titulo +'</h2>'
    genre +=  '</article>';

    return genre;
  }

  queryTMDB()
  .then(function(dataTMBD) {
    console.log(dataTMBD);
    var genresContainer = document.querySelector(".listado-generos")
    var titulo = ""
      console.log(titulo);


    for (var i = 0; i < dataTMBD.genres.length; i++) {


      titulo = dataTMBD.genres[i].name


      genresContainer.innerHTML += createItemHtml("listado-generos-item", titulo);
    }
    console.log(titulo);
  })

})
