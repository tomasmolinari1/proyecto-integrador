window.onload= function () {

  var apiKey ="81abb78b34be12fc4620b0a001276f5a";
  var urlFija = "https://image.tmdb.org/t/p/original/";

  var search = parseSearchUrl(window.location.search);

  var yearInput = document.querySelector("#year-input");
  yearInput.value = search.year;

  var genreSelect = document.querySelector("#con-genero");
  genreSelect.value = search.with_genre;

  var withoutGenreSelect = document.querySelector("#sin-genero");
  withoutGenreSelect.value = search.without_genre;

  var orderSelect = document.querySelector("#orden");
  orderSelect.value = search.order;


  queryTMDB(search)
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

  function queryTMDB(search) {
    return fetch ("https://api.themoviedb.org/3/discover/tv?api_key=" + apiKey + "&first_air_date_year=" + search.year + "&sort_by=" + search.order + "&without_genres=" + search. without_genre + "&with_genres=" + search.with_genre)
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

  function parseSearchUrl(url) {
    return url
      .slice(1)
      .split('&')
      .map((part) => part.split('='))
      .reduce((memo, val) => Object.assign({}, memo, {[val[0]]: val[1]}), {});
  }

}
