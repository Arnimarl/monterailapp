'use strict';

angular.module('Arnimarl.Monterailapp')

  .controller('MainCtrl', function ($scope, $location, version) {

    $scope.$path = $location.path.bind($location);
    $scope.version = version;
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

  });
