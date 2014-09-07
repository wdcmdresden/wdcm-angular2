'use strict';

describe('Filter: posterPath', function () {

  // load the filter's module
  beforeEach(module('moviebaseApp'));

  // initialize a new instance of the filter before each test
  var posterPath;
  beforeEach(inject(function ($filter) {
    posterPath = $filter('posterPath');
  }));

  it('should return the input prefixed with "posterPath filter:"', function () {
    var text = 'angularjs';
    expect(posterPath(text)).toBe('posterPath filter: ' + text);
  });

});
