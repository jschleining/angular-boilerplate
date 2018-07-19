var boilerPlateApp = angular.module('boilerPlateApp');

boilerPlateApp.config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.
    state('home', {
      url: '/home',
      templateUrl: './views/home/home.view.html',
      controller: 'HomePageController',
      controllerAs: 'vm'
    });
  }
]);
