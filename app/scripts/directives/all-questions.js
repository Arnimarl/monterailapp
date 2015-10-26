'use strict';

angular.module('Arnimarl.Monterailapp')

  .directive('allQuestions', function () {
    return {
      restrict: 'E',
      scope: {
      },
      replace: true,
      controller: function ($scope) {
        // wez z single-question.js!!!
        $scope.allQuestions = [
          {
            title: 'Will insulin make my patient gain weight?',
            description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
            createdBy: {
              name: 'Jenny',
              avatarSrc: 'imgs/drhouse.jpg'
            },
            answers: [
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                createdBy: {
                  name: 'Greg',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 5
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                createdBy: {
                  name: 'Greg',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 5
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                createdBy: {
                  name: 'Greg',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 4
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                createdBy: {
                  name: 'Greg',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 4
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                createdBy: {
                  name: 'Greg',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 4
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                createdBy: {
                  name: 'Greg',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 4
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                createdBy: {
                  name: 'Greg',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 4
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                createdBy: {
                  name: 'Greg',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 4
              }
            ],
            relatedDisqussionsNumber: 2,
            peersInvolvedNumber: 7,
            conversationsNumber: 4,
            votes: 19,
            hot: true,
            recent: false
          },
          {
            title: 'Vegan diet to stop diabetes progress',
            description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
            createdBy: {
              name: 'Oliver',
              avatarSrc: 'imgs/drhouse.jpg'
            },
            answers: [
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                createdBy: {
                  name: 'Ben',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 3
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                createdBy: {
                  name: 'Ben',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 3
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                createdBy: {
                  name: 'Ben',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 3
              }
            ],
            relatedDisqussionsNumber: 5,
            peersInvolvedNumber: 3,
            conversationsNumber: 3,
            votes: 19,
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
