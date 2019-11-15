window.onload= function () {

  var apiKey ="81abb78b34be12fc4620b0a001276f5a";
  var urlFija = "https://image.tmdb.org/t/p/original/";

  var query = decodeURIComponent(window.location.search.replace("?query=", "")).replace(/\+/g, " ");
  var queryInput = document.querySelector("#query-input");
  queryInput.value = query;

  queryTMDB(query)
  .then(function(dataTMBD){
    console.log(dataTMBD);
    var resultsContainer = document.querySelector("#results-buscador")
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

    var result = '<li>'
    result = '<div class="uk-panel">'
    result += '<img src="' + imagen + '">';
    result += '</div>';
    result += '</li>';

    /*<li>
        <div class="uk-panel">
            <img src="images/slider1.jpg" alt="">
            <div class="uk-position-center uk-panel"><h1>1</h1></div>
        </div>
    </li>*/

    return result;
  }

}
