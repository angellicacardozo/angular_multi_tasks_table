angular.module('taskDirectives')
	.directive('chartBlock', function() {
		var ddo= {};
		ddo.restrict = 'AE';

		ddo.scope = {
			objid: '@',
			codecovered: '@',
			status: '@'
		};

		ddo.transclude = true;
		ddo.templateUrl = 'scripts/tasks/directives/chart-block.html';

		return ddo;
	});