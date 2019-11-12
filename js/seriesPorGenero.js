
window.addEventListener("load", function(){

  var urlParams = new URLSearchParams(location.search);

  var idDeGenero = urlParams.get("idDeGenero");

  console.log(idDeGenero);

  var apiKey ="81abb78b34be12fc4620b0a001276f5a";
  var urlFija = "https://image.tmdb.org/t/p/original/";
  var urlGenero = "seriesPorGenero.html?idDeGenero=";

  var urlAPI = "https://api.themoviedb.org/3/discover/tv?api_key=" + apiKey +"&sort_by=popularity.desc&page=1&with_genres=" + idDeGenero

  function queryTMDB() {
    return fetch(urlAPI).then(function(response) { return response.json() })
  }

  function createItemHtml(clase, data) {
    var content = '<li class="'+ clase + '">'
    // genre +=      '<h2><a href="'+ urlGenero + id +'" >'+ titulo +'</a></h2>'
    // genre +=  '</li>';
    content += '<h2>' + data.name + '</h2>';
    content += '<img src="' + (data.poster_path ? urlFija + data.poster_path : 'images/cine.jpg') + '" width="">';
    content += '</li>';
    return content;
  }

  queryTMDB()
  .then(function(dataTMBD) {
    console.log(dataTMBD);
    var body = document.querySelector("body")

    for (var i = 0; i < dataTMBD.results.length; i++) {
      // titulo = dataTMBD.genres[i].name
      body.innerHTML += createItemHtml("series-por-genero-item", dataTMBD.results[i]);
    }
  })

})
