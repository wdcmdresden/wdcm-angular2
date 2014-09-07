'use strict';

/**
 * @ngdoc function
 * @name moviebaseApp.controller:MovieCtrl
 * @description
 * # MovieCtrl
 * Controller of the moviebaseApp
 */
angular.module('moviebaseApp')
  .controller('MovieCtrl', function ($scope, $routeParams, tmdbApi) {
    $scope.loaded = false;
    $scope.movie = {};
    $scope.crewDepartments = [];
    tmdbApi.movie($routeParams.id)
      .success(function(response) {
        $scope.loaded = true;
        $scope.movie = response;
        groupDepartments(response.credits.crew);
      });


    function groupDepartments(crews) {
      function ensureGroup(parent, property, container) {
        if (!parent.hasOwnProperty(property)) {
          var group = [];
          parent[property] = group;
          container.push({
            name: property,
            items: group
          });
        }
      }

      var departments = {};
      var jobs = {};
      $scope.crewDepartments = [];
      angular.forEach(crews, function(crew) {
        ensureGroup(departments, crew.department, $scope.crewDepartments);
        ensureGroup(jobs, crew.job, departments[crew.department]);
        jobs[crew.job].push(crew);
      });
    }
  });
