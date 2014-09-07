'use strict';

describe('Filter: releaseYear', function () {

  // load the filter's module
  beforeEach(module('moviebaseApp'));

  // initialize a new instance of the filter before each test
  var releaseYear;
  beforeEach(inject(function ($filter) {
    releaseYear = $filter('releaseYear');
  }));

  it('should return the input prefixed with "releaseYear filter:"', function () {
    var text = 'angularjs';
    expect(releaseYear(text)).toBe('releaseYear filter: ' + text);
  });

});
