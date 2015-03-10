angular
	.module('app.controllers', [])
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

	}]);