/**
 * LetzChange Checkout
 *
 * Using AngularUI Router to manage routing and views
 * Each view are defined as state.
 * Initial there are written state for all view in.
 *
 */
function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $locationProvider) {
    // $urlRouterProvider.when('', '/home');
   $urlRouterProvider.otherwise("/home");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });
    
    $stateProvider
    .state('home', {
        url: "/home",
        templateUrl: "views/home.html",
        resolve: {
                loadPlugin: function ($ocLazyLoad) {
                    return $ocLazyLoad.load([
                        {
                            files: ['bower_components/jquery-backstretch/jquery.backstretch.min.js']
                        }
                    ]);
                }
        }
    });
    
    
    
    
    
    
    
    
//        .state('dashboards', {
//            abstract: true,
//            url: "/dashboards",
//            templateUrl: "views/common/content.html",
//        })
//        .state('dashboards.dashboard_1', {
//            url: "/dashboard_1",
//            templateUrl: "views/dashboard_1.html",
//            resolve: {
//                loadPlugin: function ($ocLazyLoad) {
//                    return $ocLazyLoad.load([
//                        {
//
//                            serie: true,
//                            name: 'angular-flot',
//                            files: [ 'js/plugins/flot/jquery.flot.js', 'js/plugins/flot/jquery.flot.time.js', 'js/plugins/flot/jquery.flot.tooltip.min.js', 'js/plugins/flot/jquery.flot.spline.js', 'js/plugins/flot/jquery.flot.resize.js', 'js/plugins/flot/jquery.flot.pie.js', 'js/plugins/flot/curvedLines.js', 'js/plugins/flot/angular-flot.js', ]
//                        },
//                        {
//                            name: 'angles',
//                            files: ['js/plugins/chartJs/angles.js', 'js/plugins/chartJs/Chart.min.js']
//                        },
//                        {
//                            name: 'angular-peity',
//                            files: ['js/plugins/peity/jquery.peity.min.js', 'js/plugins/peity/angular-peity.js']
//                        }
//                    ]);
//                }
//            }
//        });
   // $locationProvider.html5Mode(true);
}
angular
    .module('wooBusApp')
    .config(config)
    .run(function($rootScope, $state) {
        $rootScope.$state = $state;
    });

