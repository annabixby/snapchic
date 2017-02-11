'use strict';

angular.module('myApp.uploader', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/uploader', {
    templateUrl: 'uploader/uploader.html',
    controller: 'UploaderCtrl'
  });
}])

.controller('UploaderCtrl', [function() {

}]);