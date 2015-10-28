'use strict';

angular.module('Arnimarl.Monterailapp')

  .directive('allQuestions', function () {
    return {
      restrict: 'E',
      scope: {
      },
      replace: true,
      controller: function ($scope, $location) {
        $scope.allQuestions = [
          {
            title: 'Vegan diet to stop diabetes progress',
            description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
            createdBy: {
              name: 'Oliver',
              avatarSrc: 'imgs/drhouse.jpg'
            },
            answers: [
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Ben',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 12
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Ann',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 1
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Gregg',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 3
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Alice',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 3
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Alex',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 22
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Xavier',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 11
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Albert',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 2
              }
            ],
            relatedDisqussionsNumber: 5,
            peersInvolvedNumber: 3,
            conversationsNumber: 3,
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
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Ben',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 12
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Ann',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 1
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Gregg',
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
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Ben',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 12
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Ann',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 1
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Gregg',
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
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Ben',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 12
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Ann',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 1
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Gregg',
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
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Ben',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 12
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Ann',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 1
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Gregg',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 3
              }
            ],
            relatedDisqussionsNumber: 5,
            peersInvolvedNumber: 3,
            conversationsNumber: 3,
            votes: 19,
            hot: true,
            recent: true
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
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Ben',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 12
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Ann',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 1
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Gregg',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 3
              }
            ],
            relatedDisqussionsNumber: 5,
            peersInvolvedNumber: 3,
            conversationsNumber: 3,
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
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Ben',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 12
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Ann',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 1
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Gregg',
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
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Ben',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 12
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Ann',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 1
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Gregg',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 3
              }
            ],
            relatedDisqussionsNumber: 5,
            peersInvolvedNumber: 3,
            conversationsNumber: 3,
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
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Ben',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 12
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Ann',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 1
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Gregg',
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
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Ben',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 12
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Ann',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 1
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Gregg',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 3
              }
            ],
            relatedDisqussionsNumber: 5,
            peersInvolvedNumber: 3,
            conversationsNumber: 3,
            votes: 19,
            hot: true,
            recent: true
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
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Ben',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 12
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Ann',
                  avatarSrc: 'imgs/drhouse.jpg'
                },
                votes: 1
              },
              {
                description: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
                date: '25.10.2015',
                createdBy: {
                  name: 'Gregg',
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
            recent: false
          }
        ];

        $scope.numOfQuestionsToDisp = 3;
        $scope.sortBy = 'hot';

        $scope.getQuestionsToDisp = function (numOfQuestionsToDisp, allQuestions) {
          var questionsToDisp = [];
          for (var i = 0; i < numOfQuestionsToDisp; i++) {
            questionsToDisp.push(allQuestions[i]);
            if (i === allQuestions.length - 1) {
              return questionsToDisp;
            }
          }
          return questionsToDisp;
        };

        $scope.incrementNumOfQuestionsToDisp = function () {
          $scope.numOfQuestionsToDisp = $scope.numOfQuestionsToDisp + 3;
        };

        $scope.getNumOfMoreActivities = function (question) {
          var maxInRow = 5;
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

        $scope.displayUserModal = function (user) {
          $scope.user = user;
          $scope.userModalOn = true;
        };

        $scope.goToQuestion = function (question) {
          localStorage.setItem('question', JSON.stringify(question));
          $location.path('question');
        };
      },
      templateUrl: 'views/all-questions.html'
    };
  });
