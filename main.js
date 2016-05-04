(function() {
	"use strict";
	angular
		.module('mainModule', ['ui.bootstrap', 'ngRoute'])
		.controller('mainController', mainController);
	mainController.$inject = ["$scope", "$q", "$log"];
	function mainController($scope, $q, $log) {

	}
})();
