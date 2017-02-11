'use strict';

angular.module('myApp.picker', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/picker', {
    templateUrl: 'picker/picker.html',
    controller: 'pickerCtrl'
  });
}])

.controller('pickerCtrl', [function() {

}]);