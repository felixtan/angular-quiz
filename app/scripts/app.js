'use strict';

/**
 * @ngdoc overview
 * @name quizApp
 * @description
 * # quizApp
 *
 * Main module of the application.
 */
angular
  .module('quizApp', [
    'ngCookies',
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/addQuestion', {
        templateUrl: 'views/addquestion.html',
        controller: 'AddquestionCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
