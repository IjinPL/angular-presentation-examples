angular
	.module('app.filters', [])
	.filter('vowelFilter', function () {
		return function (input) {
			return input.replace(/[aAeEiIoOuUÓó]/g, '')
		};
	});