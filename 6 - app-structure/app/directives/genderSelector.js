angular
	.module('app.directives', [])
	.directive('genderSelector', function () {
		return {
			restrict: 'E', //EAC
			scope: {
				options: '=',
				selected: '=',
				title: '@'
			},
			templateUrl: 'app/directives/gender-selector.html',
			link: function (scope) {
				scope.selectGender = function (option) {
					scope.selected = scope.options[option];
				};
			}
		};
	});