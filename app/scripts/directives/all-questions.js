'use strict';

angular.module('Arnimarl.Monterailapp')

  .directive('allQuestions', function () {
    return {
      restrict: 'E',
      scope: {
      },
      replace: true,
      controller: function ($scope) {
        $scope.allQuestions = [
          {
            description: 'Question 1',
            createdBy: 'Jenny',
            answers: [
              {
                description: 'Answer 1',
                createdBy: 'Ben'
              }
            ]
          },
          {
            description: 'Question 2',
            createdBy: 'Oliver',
            answers: [
              {
                description: 'Answer 1',
                createdBy: 'Greg'
              }
            ]
          }
          ];

      },
      templateUrl: 'views/all-questions.html'
    };
  });
