

window.onload= function () {
  //api de series populares
  var apiKey ="81abb78b34be12fc4620b0a001276f5a";
  var urlFija = "https://image.tmdb.org/t/p/original/";

  function queryTMDB(endpoint) {
    return fetch ("https://api.themoviedb.org/3/tv/" + endpoint + "?api_key=" + apiKey + "&language=en-US&page=1")
      .then(function(response) {
        return response.json();
      })
  }
  function createItemHtml(clase, titulo, imagen) {
    var serie = '<article class="'+ clase + '">'
    serie +=      '<h2>'+ titulo +'</h2>'
    serie +=      '<img src="'+ imagen +'" alt="">'
    serie +=  '</article>';

    return serie;
  }

  queryTMDB("popular")
  .then(function(dataTMBD) {
    console.log(dataTMBD);
    var popularContainer = document.querySelector(".populars")
    var titulo = ""
      console.log(titulo);
    var img_src = ""

    for (var i = 0; i < dataTMBD.results.length; i++) {


      titulo = dataTMBD.results[i].name
      img_src = urlFija + dataTMBD.results[i].poster_path

      var serie = createItemHtml("populars-item", titulo, img_src) ;

      popularContainer.innerHTML += serie
    }
    console.log(titulo);
  })

  // api de series con mejor puntaje
  queryTMDB("top_rated")
  .then(function(topRatedData) {
      console.log(topRatedData);


    var topRatedContainer = document.querySelector(".mejor-puntaje")
    for (var i = 0; i < topRatedData.results.length; i++) {
      const topRatedItem = topRatedData.results[i];
      console.log (topRatedItem.name);

      var itemTitle = topRatedItem.name
      var img_src = urlFija + topRatedItem.poster_path

      var serie = createItemHtml("mejor-puntaje-item", itemTitle, img_src);

      topRatedContainer.innerHTML += serie
    }

  })

  queryTMDB("airing_today")
  .then(function(todayData) {
      console.log(todayData);


    var todayContainer = document.querySelector(".airing-today")
    for (var i = 0; i < todayData.results.length; i++) {
      const todayItem = todayData.results[i];
      console.log (todayItem.name);

      var itemTitle = todayItem.name
      var img_src = urlFija + todayItem.poster_path

      var serie = createItemHtml("airing-today-item", itemTitle, img_src);

      todayContainer.innerHTML += serie
    }

  })

}
