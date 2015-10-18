'use strict';

angular.module('Arnimarl.Monterailapp', ['ngAnimate', 'ngRoute'])

  .constant('version', 'v0.1.0')

  .config(function ($locationProvider, $routeProvider) {

    $locationProvider.html5Mode(false);

    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html'
      })
      .when('/questions', {
        template: '<all-questions></all-questions>'
      })
      .otherwise({
        redirectTo: '/'
      });

  });

