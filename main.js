(function () {
	"use strict";
	angular
		.module('mainModule', ['ui.bootstrap', 'ngRoute'])
		.controller('mainController', mainController);
	mainController.$inject = ["$scope", "$q", "$log", "calculagraphService"];
	function mainController($scope, $q, $log, calculagraphService) {
		//don't format it since all the tabs would be converted to string
		var testFn = 
function () {
	var array = [];
	array[300000000] = 1;
	for (var i = 0, len = array.length; i < len; i++) {
	}
}
		$('.js-code-piece').text(testFn.toString());
		$('.js-code-piece').each(function (i, block) {
			hljs.highlightBlock(block);
		});
		$scope.runCode = function () {
			$scope.result = calculagraphService.calculateElapsedTime(testFn);
		}
		$log.debug($scope.result);
	}
})();
