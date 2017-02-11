'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /picker when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/picker");
  });


  describe('picker', function() {

    beforeEach(function() {
      browser.get('index.html#!/picker');
    });


    it('should render picker when user navigates to /picker', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for outfit picker/);
    });

  });


  describe('uploader', function() {

    beforeEach(function() {
      browser.get('index.html#!/uploader');
    });


    it('should render uploader when user navigates to /uploader', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for uploader/);
    });

  });
});
