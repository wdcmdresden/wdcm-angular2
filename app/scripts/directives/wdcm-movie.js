'use strict';

/**
 * @ngdoc directive
 * @name moviebaseApp.directive:wdcmMovie
 * @description
 * # wdcmMovie
 */
angular.module('moviebaseApp')
  .directive('wdcmMovie', function () {
    return {
      templateUrl: 'views/directives/wdcm-movie.html',
      restrict: 'E',
      replace: true,
      scope: {
        movie: '=',
        detail: '@'
      }
    };
  });
