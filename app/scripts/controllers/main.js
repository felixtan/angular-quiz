'use strict';

/**
 * @ngdoc function
 * @name quizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quizApp
 */
angular.module('quizApp')
  .controller('MainCtrl', function ($scope, quizService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    // $scope.quiz = [
    //   {
    //     'q': 'For what period would archaeologists first begin to find permanent human settlements?',
    //     'options': [{ 'value': 'The Paleolithic'} , { 'value': 'The Classical Era'} , {'value' : 'The Bronze Age'} , { 'value': 'The Neolithic'}],
    //     'answer': 'The Neolithic',
    //     'difficulty': 2,
    //     'submitted': false
    //   },
    //   {
    //     'q': 'Which of the following civilizations shares the most in common with the Harappan civilization found in the Indus River Valley?',
    //     'options':[{ 'value': 'The Mogul Empire in India'} , { 'value': 'The Tokugawa Shogunate in Japan'} , {'value' : 'The Olmec civilization in Mesoamerica'} , { 'value': 'The Athenian city-state in ancient Greece'}],
    //     'answer': 'The Olmec civilization in Mesoamerica',
    //     'difficulty': 6,
    //     'submitted': false
    //   },
    //   {
    //     'q': 'Identify the important original contribution of the Hebrew culture to the civilizations in the Middle East and Mediterranean during the Classical Period.',
    //     'options':[{ 'value': 'Monotheism'} ,{ 'value': 'Written legal code'} , {'value' : 'Phonetic alphabet'} , { 'value': 'Priest caste'}],
    //     'answer': 'Monotheism',
    //     'difficulty': 5,
    //     'submitted': false
    //   },
    //   {
    //     'q': 'Confucianism established political and social systems in China while what other philosophy contributed significantly to China’s medical practices and art and architecture?',
    //     'options':[{ 'value': 'Legalism'} ,{ 'value': 'Shintoism'} , {'value' : 'Hinduism'} , { 'value': 'Daoism'}],
    //     'answer':'Daoism',
    //     'difficulty': 3,
    //     'submitted': false
    //   }
    // ];
    $scope.quiz = quizService.getQuiz();
    $scope.checked = false;
    $scope.score = 0;
    $scope.button_clicked = false;
    $scope.submitOption = function(option, answer, question) {
      /*
        1. check the checkbox of the chosen option
        2. disable the question from further interaction
      */
      if(option == answer) {
        $scope.score++;
      }

      for(var q in $scope.quiz) {
        if($scope.quiz[q].q == question) {
          $scope.quiz[q].submitted = true;
        }
      }

      // Checks the checkbox of the selected option
      // Concern: If two or more questions have the same option, then they will all be checked off when only one of them is clicked. Using the question or answer to identify the correct checkbox to check won't work because all options corresponding to the question will be checked off.
      // PROBLEM: When the correct answer is chosen, all options corresponding to the question are checked.
      // SOLUTION: I had {{option.value}} and {{question.answer}} as classes for the checkbox input element. Removed {{question.answer}}.
      var optionClassString = '.' + option.replace(/\s/g, '.');
      $(optionClassString).attr('checked', 'checked');

      return false;
    };
  });