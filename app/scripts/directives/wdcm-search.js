'use strict';

/**
 * @ngdoc directive
 * @name moviebaseApp.directive:search
 * @description
 * # search
 */
angular.module('moviebaseApp')
  .controller('WdcmSearchCtrl', function($scope, $location, tmdbApi) {
    var realm = $scope.realm || 'movie';
    var searchUrlParam = 'q';

    function search(keyword, withLocationUpdate) {
      tmdbApi.search(keyword, realm, $scope.pages.current)
        .success(function(response) {
          $scope.result = response.results;
          $scope.pages.items = response['total_results'];  // jshint ignore:line
          if (withLocationUpdate) {
            $location.search(searchUrlParam, keyword);
          }
        });
    }

    function loadUrlParam() {
      var locationSearch = $location.search()[searchUrlParam];
      if (angular.isString(locationSearch) && locationSearch.length) {
        $scope.keyword = locationSearch;
        search(locationSearch, false);
      }
    }

    $scope.search = function() {
      search($scope.keyword, true);
    };

    $scope.$watch('pages.current', function(newValue, oldValue) {
      if (newValue !== oldValue) {
        search($scope.keyword, true);
      }
    });

    loadUrlParam();
  })
  .directive('wdcmSearch', function () {
    return {
      controller: 'WdcmSearchCtrl',
      templateUrl: 'views/directives/wdcm-search.html',
      restrict: 'E',
      replace: true,
      scope: {
        realm: '@',
        result: '=',
        pages: '='
      }
    };
  });
