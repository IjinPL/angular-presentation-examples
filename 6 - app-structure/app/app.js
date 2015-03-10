angular
	.module('app', [
		'ui.router',
		'app.controllers',
		'app.directives',
		'app.filters'
	])

	.run(['$rootScope', '$state',
		function ($rootScope, $state) {
			$rootScope.$state = $state;
		}
	])

	.config(['$urlRouterProvider', '$stateProvider', '$provide', function ($urlRouterProvider, $stateProvider, $provide) {

		$provide.decorator('$log', ['$delegate', function ($delegate) {
			var originalDebug = $delegate.debug;

			$delegate.debug = function () {
				var args = [].slice.call(arguments),
					now = new Date().toISOString();

				args[0] = now + ' ' + args[0];
				originalDebug.apply(null, args)
			};

			return $delegate;
		}]);

		$stateProvider
			.state('app', {
				url: '/',
				views: {
					'@': {templateUrl: 'app/templates/home.html'}
				}
			})
			.state('app.gender', {
				url: 'gender',
				views: {
					'@': {
						controller: 'GenderController',
						templateUrl: 'app/templates/gender.html'
					}
				}
			});

		$urlRouterProvider.otherwise('/');
	}]);
