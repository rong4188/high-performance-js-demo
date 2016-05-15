(function() {
	"use strict";
	angular
		.module('mainModule')
		.factory('functionCollectionService', functionCollectionService);
	function functionCollectionService() {
		this.testFunction1 = function () {
			var array = [];
			array[300000000] = 1;
			for (var i = 0, len = array.length; i < len; i++) {
			}
		}

		this.testFunction2 = function () {
			var array = [];
			array[300000000] = 1;
			for (var i = 0; i < array.length; i++) {
			}
		}
		
		return this;
	}
})();
