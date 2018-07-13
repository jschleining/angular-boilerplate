var boilerPlateApp = angular.module('boilerPlateApp', ['ui.router']);

boilerPlateApp.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
	}
]);

boilerPlateApp.controller('MainController', ['$rootScope', '$scope', '$state',
function($rootScope, $scope, $state) {
  $scope.$state = $state;
}]);
