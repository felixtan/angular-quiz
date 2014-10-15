'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:AddquestionCtrl
 * @description
 * # AddquestionCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('AddquestionCtrl', function ($scope, quizService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  $scope.question = {
    'q': '',
    'options': [],
    'answer': '',
    'difficulty': 0,
    'submitted': false
  };
  $scope.option1 = {};
  $scope.option2 = {};
  $scope.option3 = {};
  $scope.option4 = {};

  $scope.submit = function() {
    $scope.question.options.push($scope.option1);
    $scope.question.options.push($scope.option2);
    $scope.question.options.push($scope.option3);
    $scope.question.options.push($scope.option4);

    // Push new question to the quiz service
    quizService.addQuestion($scope.question);

    $scope.reset();
  }

  $scope.reset = function() {
    // Reset input fields
    $scope.question = {
      'q': '',
      'options': [],
      'answer': '',
      'difficulty': 0,
      'submitted': false
    };
    $scope.option1 = {};
    $scope.option2 = {};
    $scope.option3 = {};
    $scope.option4 = {};
  };
});
