angular
	.module('app', ['ui.router'])

	.run(['$rootScope', '$state',
		function ($rootScope, $state) {
			$rootScope.$state = $state;
		}
	])

	.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

		$urlRouterProvider
			.otherwise('/');

		$stateProvider
			.state('app', {
				url: '/',
				template: '<h1>Hello & Welcome</h1>'
			});
	}]);
