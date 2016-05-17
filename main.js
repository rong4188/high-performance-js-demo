(function () {
	"use strict";
	angular
		.module('mainModule', ['ui.bootstrap', 'ngRoute'])
		.controller('mainController', mainController);
	mainController.$inject = ["$q", "$log", "calculagraphService", "functionCollectionService"];
	function mainController($q, $log, calculagraphService, functionCollectionService) {
		var testFunction1 = function () {
			var array = [];
			array[300000000] = 1;
			for (var i = 0, len = array.length; i < len; i++) {
			}
		}

		var testFunction2 = function () {
			var array = [];
			array[300000000] = 1;
			for (var i = 0; i < array.length; i++) {
			}
		}

		functionCollectionService.createFunctionSet("testFunction1", testFunction1);
		functionCollectionService.createFunctionSet("testFunction2", testFunction2);

		var vm = this;
		vm.runCode = function () {
			var targetFn = functionCollectionService.functionCollection['testFunction' + vm.functionNum];
			vm.result = calculagraphService.calculateElapsedTime(targetFn.fn);
			$('.js-code-piece').text(targetFn.text);
			$('.js-code-piece').each(function (i, block) {
				hljs.highlightBlock(block);
			});
		}
		$log.debug(vm.result);
	}
})();
