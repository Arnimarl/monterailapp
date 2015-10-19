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
            description: 'Will insulin make my patient gain weight?',
            createdBy: {
              name: 'Jenny',
              avatarSrc: 'imgs/avatar.jpg'
            },
            answers: [
              {
                description: 'Answer 1',
                createdBy: {
                  name: 'Greg',
                  avatarSrc: 'imgs/avatar.jpg'
                }
              },
              {
                description: 'Answer 1',
                createdBy: {
                  name: 'Greg',
                  avatarSrc: 'imgs/avatar.jpg'
                }
              },
              {
                description: 'Answer 1',
                createdBy: {
                  name: 'Greg',
                  avatarSrc: 'imgs/avatar.jpg'
                }
              },
              {
                description: 'Answer 1',
                createdBy: {
                  name: 'Greg',
                  avatarSrc: 'imgs/avatar.jpg'
                }
              },
              {
                description: 'Answer 1',
                createdBy: {
                  name: 'Greg',
                  avatarSrc: 'imgs/avatar.jpg'
                }
              },
              {
                description: 'Answer 1',
                createdBy: {
                  name: 'Greg',
                  avatarSrc: 'imgs/avatar.jpg'
                }
              },
              {
                description: 'Answer 1',
                createdBy: {
                  name: 'Greg',
                  avatarSrc: 'imgs/avatar.jpg'
                }
              },
              {
                description: 'Answer 1',
                createdBy: {
                  name: 'Greg',
                  avatarSrc: 'imgs/avatar.jpg'
                }
              }
            ],
            relatedDisqussionsNumber: 2,
            peersInvolvedNumber: 7,
            conversationsNumber: 4,
            hot: true,
            recent: false
          },
          {
            description: 'Vegan diet to stop diabetes progress',
            createdBy: {
              name: 'Oliver',
              avatarSrc: 'imgs/avatar.jpg'
            },
            answers: [
              {
                description: 'Answer 1',
                createdBy: {
                  name: 'Ben',
                  avatarSrc: 'imgs/avatar.jpg'
                }
              },
              {
                description: 'Answer 1',
                createdBy: {
                  name: 'Ben',
                  avatarSrc: 'imgs/avatar.jpg'
                }
              },
              {
                description: 'Answer 1',
                createdBy: {
                  name: 'Ben',
                  avatarSrc: 'imgs/avatar.jpg'
                }
              }
            ],
            relatedDisqussionsNumber: 5,
            peersInvolvedNumber: 3,
            conversationsNumber: 3,
            hot: false,
            recent: true
          }
        ];

        $scope.sortBy = 'hot';

        $scope.getNumOfMoreActivities = function (question) {
          var maxInRow = 5;
          console.log(question.answers.length - maxInRow);
          return question.answers.length - maxInRow;
        };

        $scope.getAnswers = function (answers) {
          var maxNumOfAnswers = 4;

          if (answers.length < maxNumOfAnswers) {
            return answers;
          }

          var i = 0;
          var answer;
          var answersToDisplay = [];

          while (true) {
            i++;
            answer = answers[i];
            answersToDisplay.push(answer);
            if (answers.indexOf(answer) === maxNumOfAnswers) {
              return answersToDisplay;
            }
          }
        };

        $scope.sort = function (byWhat) {
          if ($scope.sortBy === byWhat) {
            $scope.sortBy = false;
            return;
          }
          $scope.sortBy = byWhat;
        };
      },
      templateUrl: 'views/all-questions.html'
    };
  });
