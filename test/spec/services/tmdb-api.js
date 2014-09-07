'use strict';

describe('Service: tmdbApi', function () {

  // load the service's module
  beforeEach(module('moviebaseApp'));

  // instantiate service
  var tmdbApi;
  beforeEach(inject(function (_tmdbApi_) {
    tmdbApi = _tmdbApi_;
  }));

  it('should do something', function () {
    expect(!!tmdbApi).toBe(true);
  });

});
