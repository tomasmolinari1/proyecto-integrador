window.onload= function () {
  var apiKey ="81abb78b34be12fc4620b0a001276f5a"

  fetch ("https://api.themoviedb.org/3/tv/popular?api_key=81abb78b34be12fc4620b0a001276f5a&language=en-US&page=1")
  .then(function(response) {
    return response.json();
  })
  .then(function(dataTMBD) {
    console.log(dataTMBD);
    var popularContainer = document.querySelector(".populars")
    var titulo = ""
    var img_src = ""
    var serie = ""
    var urlFija = "https://image.tmdb.org/t/p/original/"
    for (var i = 0; i < dataTMBD.results.length; i++) {
      console.log (dataTMBD.results[i].name);

      titulo = dataTMBD.results[i].name
      img_src = urlFija + dataTMBD.results[i].poster_path

      serie =   '<article class="">'
      serie +=      '<h2>'+ titulo +'</h2>'
      serie +=      '<img src="'+ img_src +'" alt="">'
      serie +=  '</article>'

      popularContainer.innerHTML += serie
    }
  })


  fetch ("https://api.themoviedb.org/3/tv/top_rated?api_key=81abb78b34be12fc4620b0a001276f5a&language=en-US&page=1")
  .then(function(response) {
    return response.json();
  })
  .then(function(dataTMBD) {
      console.log(dataTMBD);


    var popularContainer = document.querySelector(".mejor-puntaje")
    for (var i = 0; i < dataTMBD.results.length; i++) {
      console.log (dataTMBD.results[i].name);

      popularContainer.innerHTML
    }

  })


}
