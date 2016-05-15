(function () {
	"use strict";
	angular
		.module('mainModule', ['ui.bootstrap', 'ngRoute'])
		.controller('mainController', mainController);
	mainController.$inject = ["$q", "$log", "calculagraphService", "functionCollectionService"];
	function mainController( $q, $log, calculagraphService, functionCollectionService) {
		var vm = this;
		vm.runCode = function () {
			vm.result = calculagraphService.calculateElapsedTime(functionCollectionService['testFunction' + vm.functionNum]);
			$('.js-code-piece').text(functionCollectionService['testFunction' + vm.functionNum].toString());
			$('.js-code-piece').each(function (i, block) {
				hljs.highlightBlock(block);
			});
		}
		$log.debug(vm.result);
	}
})();
