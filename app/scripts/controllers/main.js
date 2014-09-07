'use strict';

/**
 * @ngdoc function
 * @name moviebaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the moviebaseApp
 */
angular.module('moviebaseApp')
  .controller('MainCtrl', function ($scope) {
    $scope.movies = [];
    $scope.pages = {
      current: 1,
      total: 1,
      items: 0
    };
  });
