'use strict';

angular.module('Arnimarl.Monterailapp', ['ngAnimate', 'ngRoute'])

  .constant('version', 'v0.1.0')

  .config(function ($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(false);

    $routeProvider
      .when('/questions', {
        template: '<all-questions></all-questions>'
      })
      .when('/question', {
        controller: 'QuestionCtrl',
        templateUrl: 'views/single-question.html'
      })
      .otherwise({
        redirectTo: '/questions'
      });

  });

