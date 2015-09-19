angular.module('taskDirectives')
	.directive('progressBar', function() {
		var ddo= {};
		ddo.restrict = 'AE';

		ddo.scope = {
			completion: '@'
		};

		ddo.transclude = true;
		ddo.templateUrl = 'scripts/tasks/directives/progress-bar.html';

		return ddo;
	});