var boilerPlateApp = angular.module('boilerPlateApp');

boilerPlateApp.config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.
    state('contact', {
      url: '/contact',
      templateUrl: './contact/contact.view.html',
      controller: 'ContactPageController',
      controllerAs: 'vm'
    });
  }
]);
