var boilerPlateApp = angular.module('boilerPlateApp', ['ui.router']);

boilerPlateApp.config(['$stateProvider', '$urlRouterProvider',
	function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");

    // $stateProvider.
    //     state('home', {
    //       url: '/home',
    //       templateUrl: './home/home.view.html',
    //       controller: 'HomePageController',
    //       controllerAs: 'vm'
    //     }).
    //     state('about', {
    //       url: '/about',
    //       templateUrl: './about/about.view.html',
    //       controller: 'AboutPageController',
    //       controllerAs: 'vm'
    //     }).
    //     state('contact', {
    //       url: '/contact',
    //       templateUrl: './contact/contact.view.html',
    //       controller: 'ContactPageController',
    //       controllerAs: 'vm'
    //     });

	}
]);

boilerPlateApp.controller('MainController', ['$rootScope', '$scope', '$state',
  function($rootScope, $scope, $state) {
    $scope.$state = $state;
  }]);
