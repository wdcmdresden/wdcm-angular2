'use strict';

/**
 * @ngdoc filter
 * @name moviebaseApp.filter:releaseYear
 * @function
 * @description
 * # releaseYear
 * Filter in the moviebaseApp.
 */
angular.module('moviebaseApp')
  .filter('releaseYear', function () {
    return function (input) {
      input = input || '';
      var year = input.split('-', 1)[0];
      return year || 'unknown';
    };
  });
