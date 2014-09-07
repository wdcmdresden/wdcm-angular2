'use strict';

/**
 * @ngdoc service
 * @name moviebaseApp.tmdbApi
 * @description
 * # tmdbApi
 * Provider in the moviebaseApp.
 */
angular.module('moviebaseApp')
  .provider('tmdbApi', function() {
    var apiKey = '';
    var apiBase = 'https://api.themoviedb.org/3/';

    function TmdbApi($http) {
      function api(apiMethod, params) {
        var urlParams = {
          'api_key': apiKey
        };
        angular.extend(urlParams, params || {});
        return $http.get(apiBase + apiMethod, { params: urlParams });
      }

      this.search = function search(keyword, realm, page) {
        var method = 'search/' + realm;
        page = +page || 1;
        return api(method, { query: keyword, page: page });
      };

      this.movie = function(id) {
        var method = 'movie/' + id;
        return api(method, { 'append_to_response': 'credits' });
      };

      this.imageUrls = function() {
        return {
          brief: 'https://image.tmdb.org/t/p/w92',
          detail: 'https://image.tmdb.org/t/p/w185',
          backdrop: 'https://image.tmdb.org/t/p/w780'
        };
      };
    }

    this.setApiKey = function (newApiKey) {
      apiKey = newApiKey;
    };

    this.setApiBase = function (newApiBase) {
      apiBase = newApiBase;
    };

    this.$get = function($http) {
      return new TmdbApi($http);
    };
  });
