'use strict';

angular.module('snapChicApp.version', [
  'snapChicApp.version.interpolate-filter',
  'snapChicApp.version.version-directive'
])

.value('version', '0.1');
