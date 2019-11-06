window.addEventListener ('load' function) {

  var apiKey ="81abb78b34be12fc4620b0a001276f5a";
  var urlFija = "https://image.tmdb.org/t/p/original/";

  function queryTMDB(endpoint) {
    return fetch ("https://api.themoviedb.org/3/tv/" + endpoint + "?api_key=" + apiKey + "&language=en-US&page=1")
      .then(function(response) {
        return response.json();

      console.log(response);


}
