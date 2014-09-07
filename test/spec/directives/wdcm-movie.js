'use strict';

describe('Directive: wdcmMovie', function () {

  // load the directive's module
  beforeEach(module('moviebaseApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<wdcm-movie></wdcm-movie>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the wdcmMovie directive');
  }));
});
