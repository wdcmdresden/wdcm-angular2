'use strict';

/**
 * @ngdoc filter
 * @name moviebaseApp.filter:posterPath
 * @function
 * @description
 * # posterPath
 * Filter in the moviebaseApp.
 */
angular.module('moviebaseApp')
  .filter('posterPath', function(tmdbApi) {
    return function (input, mode) {
      input = input || '';
      mode = mode || 'brief';
      if (input) {
        var baseUrl = tmdbApi.imageUrls()[mode];
        if (baseUrl) {
          return baseUrl + input;
        }
      }
      return 'http://placekitten.com/700/575';
    };
  });
