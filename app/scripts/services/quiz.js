/*
  Stores quiz data like questions, answers, etc.
*/

'use strict';

/**
 * @ngdoc service
 * @name quizApp.quiz
 * @description
 * # quiz
 * Service in the quizApp.
 */
angular.module('quizApp')
  .service('quizService', function quiz() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var quiz = [
      {
        'q': 'For what period would archaeologists first begin to find permanent human settlements?',
        'options': [{ 'value': 'The Paleolithic'} , { 'value': 'The Classical Era'} , {'value' : 'The Bronze Age'} , { 'value': 'The Neolithic'}],
        'answer': 'The Neolithic',
        'difficulty': 2,
        'submitted': false
      },
      {
        'q': 'Which of the following civilizations shares the most in common with the Harappan civilization found in the Indus River Valley?',
        'options':[{ 'value': 'The Mogul Empire in India'} , { 'value': 'The Tokugawa Shogunate in Japan'} , {'value' : 'The Olmec civilization in Mesoamerica'} , { 'value': 'The Athenian city-state in ancient Greece'}],
        'answer': 'The Olmec civilization in Mesoamerica',
        'difficulty': 6,
        'submitted': false
      },
      {
        'q': 'Identify the important original contribution of the Hebrew culture to the civilizations in the Middle East and Mediterranean during the Classical Period.',
        'options':[{ 'value': 'Monotheism'} ,{ 'value': 'Written legal code'} , {'value' : 'Phonetic alphabet'} , { 'value': 'Priest caste'}],
        'answer': 'Monotheism',
        'difficulty': 5,
        'submitted': false
      },
      {
        'q': 'Confucianism established political and social systems in China while what other philosophy contributed significantly to China’s medical practices and art and architecture?',
        'options':[{ 'value': 'Legalism'} ,{ 'value': 'Shintoism'} , {'value' : 'Hinduism'} , { 'value': 'Daoism'}],
        'answer':'Daoism',
        'difficulty': 3,
        'submitted': false
      }
    ];
    var addQuestion = function(question) {
      quiz.push(question);
    };
    var getQuiz = function() {
      return quiz;
    };
    return {
      addQuestion: addQuestion,
      getQuiz: getQuiz
    };
  });
