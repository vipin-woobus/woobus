/**
 * wooBusApp
 *
 * Main controller.js file
 * Define controllers with data
 *
 *
 * Functions (controllers)
 *  - MainCtrl
 *
 */

/**
 * MainCtrl - controller
 * Contains severals global data used in diferent view
 *
 */
function MainCtrl() {
	
};

function HomeCtrl(){
	$.backstretch([
	  "images/image001.jpg",
	  "images/image002.jpg"
	  ], {
		fade: 750,
		duration: 6000
	});
}

/**
 *
 * Pass all functions into module
 */
angular
.module('wooBusApp')
.controller('MainCtrl', MainCtrl)
.controller('HomeCtrl', HomeCtrl);



