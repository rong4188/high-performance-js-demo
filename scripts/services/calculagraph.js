(function() {
	"use strict";
	angular
		.module('mainModule')
		.factory('calculagraphService', calculagraphService);
	function calculagraphService() {
		function calculateElapsedTime(fn) {
			var timeStampBefore, timeStampAfter, elapsedTime;
			timeStampBefore = Date.now();
			fn();
			timeStampAfter = Date.now();
			elapsedTime = timeStampAfter - timeStampBefore;
			return {
				timeStampBefore: timeStampBefore,
				timeStampAfter: timeStampAfter,
				elapsedTime: elapsedTime
			};
		}
		
		return {
			calculateElapsedTime: calculateElapsedTime
		};
	}
})();
