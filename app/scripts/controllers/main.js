'use strict';

angular.module('Arnimarl.Monterailapp')

  .controller('MainCtrl', function ($scope, $location, version) {

    $scope.$path = $location.path.bind($location);
    $scope.version = version;

  });
