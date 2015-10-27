'use strict';

angular.module('Arnimarl.Monterailapp')

  .controller('QuestionCtrl', function ($scope) {

    function getQuestion () {
      // I know that below solution probably isn't the best way
      // to pass data beetween views, but when I tried with ui-sref
      // something was wrong
      // below implementation works fine, without any complications
      var question = localStorage.getItem('question');
      question = JSON.parse(question);
      $scope.question = question;
    }

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

    $scope.displayUserModal = function (user) {
      $scope.user = user;
      $scope.userModalOn = true;
    };

    getQuestion();

  });
