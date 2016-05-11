(function() {
	"use strict";
	angular
		.module('mainModule', ['ui.bootstrap', 'ngRoute'])
		.controller('mainController', mainController);
	mainController.$inject = ["$scope", "$q", "$log", "calculagraphService"];
	function mainController($scope, $q, $log, calculagraphService) {
		var testFn = function() {
			var array = [];
			array[300000000] = 1;
			for(var i = 0, len = array.length; i < len; i++) {
				
			}
		}
		
		$scope.result = calculagraphService.calculateElapsedTime(testFn);
		$log.debug($scope.result);
	}
})();
