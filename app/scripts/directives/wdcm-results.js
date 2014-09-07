'use strict';

/**
 * @ngdoc directive
 * @name moviebaseApp.directive:wdcmResults
 * @description
 * # wdcmResults
 */
angular.module('moviebaseApp')
  .directive('wdcmResults', function () {
    return {
      templateUrl: 'views/directives/wdcm-results.html',
      restrict: 'E',
      replace: true,
      transclude: true,
      scope: {
        movies: '=',
        pages: '=',
        detail: '@'
      }
    };
  });
