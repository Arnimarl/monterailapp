'use strict';

angular.module('Arnimarl.Monterailapp')

  .directive('userModal', function () {
    return {
      restrict: 'E',
      scope: {
        userModalOn: '=',
        user: '='
      },
      replace: true,
      controller: function ($scope) {
        $scope.mockupImg1 = 'imgs/drhouse.jpg';
        $scope.mockupImg1 = 'imgs/doctor1.jpg';
        $scope.mockupImg1 = 'imgs/doctor2.jpg';

        $scope.closeModal = function () {
          $scope.userModalOn = false;
        };
      },
      templateUrl: 'views/user-modal.html'
    };
  });
