'use strict';

angular.module('moviebaseApp')
  .config(function(tmdbApiProvider) {
    tmdbApiProvider.setApiKey('');
  });

