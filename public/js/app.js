
var MLBStatsApp = angular.module('MLBStatsApp', ['ngResource', 'ngRoute']);

MLBStatsApp.config(['$routeProvider', '$locationProvider', '$resourceProvider' , function($routeProvider, $locationProvider, $resourceProvider){
	// $resourceProvider.defaults.stripTrailingSlashes = false;
    //
	// $routeProvider.
	// 	when('/compute',			{controller: 'mainPageController',	templateUrl: 'mainPage.html'}).
	// 	when('/compare',				{controller: 'diffController',		templateUrl: 'diff.html'}).
	// 	when('/rules',				{controller: 'editorController',	templateUrl: 'editor.html'}).
	// 	when('/',					{controller: 'configsController',	templateUrl: 'configurations.html'}).
	// 	otherwise({redirectTo:'/'});
}]);
