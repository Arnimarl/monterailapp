'use strict';

angular.module('Arnimarl.Monterailapp')

  .controller('QuestionCtrl', function ($scope) {

    console.log('QuestionCtrl fired!');

    $scope.img = '/imgs/drhouse.jpg';

    $scope.question = {
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
      hot: false,
      recent: true
    };

    $scope.voteUp = function (obj) {
      if (obj.votedUp) {
        return;
      }
      obj.votes++;
      obj.votedUp = true;
      obj.votedDown = false;
    };

    $scope.voteDown = function (obj) {
      if (obj.votedDown) {
        return;
      }
      obj.votes--;
      obj.votedUp = false;
      obj.votedDown = true;
    };

  });
