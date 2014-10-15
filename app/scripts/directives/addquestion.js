'use strict';

/**
 * @ngdoc directive
 * @name quizApp.directive:addQuestion
 * @description
 * # addQuestion
 */
angular.module('quizApp')
  .directive('addQuestion', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the addQuestion directive');
      }
    };
  });
