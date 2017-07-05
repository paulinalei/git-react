var axios = require("axios");

var clientID = CLIENT_ID;
var clientSecret = CLIENT_SECRET;
var params = "?client_id=" + id + "&client_secret=" + sec;

module.exports = {
  getPopularRepos: function (language) {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI)
      .then(function (response) {
        return response.data.items;
      });
  }
};
