var boilerPlateApp = angular.module('boilerPlateApp');

boilerPlateApp.controller('AboutPageController', ['$scope', 'MyService', function($scope, MyService) {
  var vm_ = this;
  vm_.localProperty = 'about page property';
  vm_.clicks = MyService.clicks;

  vm_.addClick = addClick_;

  function addClick_() {
    MyService.updateClicks();
    vm_.clicks = MyService.clicks;
  }
}]);
