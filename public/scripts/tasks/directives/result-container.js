 template: '<ng-include src="template()"></ng-include>',
 angular.module('taskDirectives')
	.directive('resultContainer', function() {
		   return {
		       restrict: 'AE',
		       link: function(scope, element, attrs) {
		           scope.getContentUrl = function() {

			           return 'scripts/tasks/directives/results/' + attrs.status + '.html';

		           }
		       },
		       template: '<div ng-include="getContentUrl()"></div>'
		   }
	});