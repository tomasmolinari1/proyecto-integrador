window.onload= function () {

  var apiKey ="81abb78b34be12fc4620b0a001276f5a";
  var urlFija = "https://image.tmdb.org/t/p/original/";

  var search = new URLSearchParams(window.location.search);

  // var yearInput = document.querySelector("#year-input");
  // yearInput.value = search.get('year');
  //
  // var genreSelect = document.querySelector("#con-genero");
  // genreSelect.value = search.get('with_genre');
  //
  // var withoutGenreSelect = document.querySelector("#sin-genero");
  // withoutGenreSelect.value = search.get('without_genre');
  //
  // var orderSelect = document.querySelector("#orden");
  // orderSelect.value = search.get('order');


  queryTMDB(search)
  .then(function(dataTMBD){
    console.log(dataTMBD);
    var resultsContainer = document.querySelector("#results-buscador-avanzado")
    var titulo = "";



    for (var i = 0; i < dataTMBD.results.length; i++) {


      titulo = dataTMBD.results[i].name


      resultsContainer.innerHTML += createItemHtml("buscador-avanzado-item", titulo, dataTMBD.results[i].poster_path, dataTMBD.results[i].id);
      console.log(titulo);


    }


  function createItemHtml(clase, titulo, img_url, idSerie) {
    var imagen = img_url ? urlFija + img_url : 'images/cine.jpg';

    var result = '<li>'
    result += '<div class="uk-panel">'
    result += '<a href="detalles.html?idSerie='+idSerie+'">'
    result +=   '<h2>'+ titulo +'</h2>'
    result += '<img src="' + imagen + '">';
    result += '</div>';
    result += '</a></li>';
    return result
  }
})
function queryTMDB(search) {
  return fetch ("https://api.themoviedb.org/3/discover/tv?api_key=" + apiKey + "&first_air_date_year=" + search.get('year') + "&sort_by=" + search.get('order') + "&without_genres=" + search.get('without_genre') + "&with_genres=" + search.get('with_genre'))
  .then(function(response) {
    return response.json();
  })
}

  // // function createItemHtml(clase, titulo, img_url) {
  // //   var imagen = img_url ? urlFija + img_url : 'images/cine.jpg';
  // //
  // //   var result = '<li class="'+ clase + '">'
  // //   result +=      '<h2>'+ titulo +'</h2>'
  // //   result +=      '<img src="'+ imagen +'" alt="">'
  // //   result +=  '</li>';
  // //
  // //   return result;
  // }

}
