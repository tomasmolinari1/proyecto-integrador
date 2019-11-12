window.onload= function () {

  var apiKey ="81abb78b34be12fc4620b0a001276f5a";
  var urlFija = "https://image.tmdb.org/t/p/original/";

  var query = decodeURIComponent(window.location.search.replace("?query=", "")).replace(/\+/g, " ");
  var queryInput = document.querySelector("#query-input");
  queryInput.value = query;

  queryTMDB(query)
  .then(function(dataTMBD){
    console.log(dataTMBD);
    var resultsContainer = document.querySelector(".results-buscador")
    var titulo = ""
    console.log(titulo);


    for (var i = 0; i < dataTMBD.results.length; i++) {


      titulo = dataTMBD.results[i].name


      resultsContainer.innerHTML += createItemHtml("buscador-simple-item", titulo, dataTMBD.results[i].poster_path);
      console.log(titulo);
    }

  })


  function queryTMDB(query) {
    return fetch ("https://api.themoviedb.org/3/search/tv?api_key=" + apiKey + "&query=" + query + "&page=1&include_adult=true")
      .then(function(response) {
        return response.json();
      })
  }
  function createItemHtml(clase, titulo, img_url) {
    var imagen = img_url ? urlFija + img_url : 'images/cine.jpg';

    var result = '<li class="'+ clase + '">'
    result +=      '<h2>'+ titulo +'</h2>'
    result +=      '<img src="'+ imagen +'" alt="">'
    result +=  '</li>';

    return result;
  }

}
