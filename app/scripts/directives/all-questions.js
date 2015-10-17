'use strict';

angular.module('Arnimarl.Monterailapp')

  .directive('allQuestions', function () {
    return {
      restrict: 'E',
      scope: {
        allQuestions: '='
      },
      replace: true,
      controller: function ($scope) {
        console.log($scope.allQuestions);
      },
      templateUrl: 'views/all-questions.html'
    };
  });
