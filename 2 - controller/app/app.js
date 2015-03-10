angular
	.module('app', ['ui.router'])

	.run(['$rootScope', '$state',
		function ($rootScope, $state) {
			$rootScope.$state = $state;
		}
	])

	.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

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

	.controller('GenderController', ['$scope', function ($scope) {
			$scope.genders = {
			male: 'męszczyzna',
			female: 'kobieta',
			gender: 'inna płeć'
		};

		$scope.name = 'Joanna';
		$scope.selectedGender = $scope.genders.female;

		$scope.selectGender = function (option) {
			$scope.selectedGender = $scope.genders[option];
		};

	}]);
