'use strict';

angular.module('snapChicApp.picker', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/picker', {
    templateUrl: 'picker/picker.html',
    controller: 'pickerCtrl'
  });
}])

.controller('pickerCtrl', [function() {

}]);