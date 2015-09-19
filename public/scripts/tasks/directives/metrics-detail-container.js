angular.module('taskDirectives')
	.directive('metricsDetailContainer', function() {
		var ddo= {};
		ddo.restrict = 'AE';

		ddo.scope = {
			testtotal: '@',
			teststate: '@',

			maintainabilitytotal: '@',
			maintainabilitystate: '@',

			securitytotal: '@',
			securitystate: '@',

			workmanshiptotal: '@',
			workmanshipstate: '@'
		};

		ddo.transclude = true;
		ddo.templateUrl = 'scripts/tasks/directives/metrics-detail-container.html';

		return ddo;
	});