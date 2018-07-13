var boilerPlateApp = angular.module('boilerPlateApp');

boilerPlateApp.config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.
    state('about', {
      url: '/about',
      templateUrl: './about/about.view.html',
      controller: 'AboutPageController',
      controllerAs: 'vm'
    });
  }
]);