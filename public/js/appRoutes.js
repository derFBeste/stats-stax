angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

$routeProvider

    // home page
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
    })

    // MLB
    .when('/mlb', {
        templateUrl: 'views/mlb.html',
        controller: 'MLBController'
    });

    // NFL

    // NBA

$locationProvider.html5Mode(true);

}]);
