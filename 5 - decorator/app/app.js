angular
	.module('app', ['ui.router'])

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
	}])

	.controller('GenderController', ['$scope', '$log', function ($scope, $log) {
		$scope.genders = {
			male: 'męszczyzna',
			female: 'kobieta',
			gender: 'inna płeć'
		};

		$scope.name = 'Joanna';

		$scope.$watch('name', function (oldValue, newValue) {
			if (oldValue !== newValue)
				$log.debug($scope.name);
		});

		$scope.selectedGenders = $scope.genders.female;

	}])

	.directive('genderSelector', function () {
		return {
			restrict: 'E', //EAC
			scope: {
				options: '=',
				selected: '=',
				title: '@'
			},
			templateUrl: 'app/templates/gender-select.html',
			link: function (scope) {
				scope.selectGender = function (option) {
					scope.selected = scope.options[option];
				};
			}
		};
	})

	.filter('vowels', function () {
		return function (input) {
			return input.replace(/[aAeEiIoOuUÓó]/g, '')
		};
	});
