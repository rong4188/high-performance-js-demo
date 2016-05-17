(function () {
	"use strict";
	angular
		.module('mainModule')
		.factory('functionCollectionService', functionCollectionService);
	function functionCollectionService() {
		this.functionCollection = {};
		this.createFunctionSet = function (name, fn) {
			if (!name || this.functionCollection[name]) {
				throw "Function creating failed: name is invalid";
			}

			this.functionCollection[name] = {
				fn: fn,
				text: window.js_beautify(fn.toString())
			}
		}

		return this;
	}
})();
