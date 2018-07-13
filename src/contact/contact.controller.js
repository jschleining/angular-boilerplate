var boilerPlateApp = angular.module('boilerPlateApp');

boilerPlateApp.controller('ContactPageController', ['$scope', 'MyService', function($scope, MyService) {
  var vm_ = this;
  vm_.localProperty = 'contact page property';
  vm_.clicks = MyService.clicks;

  vm_.addClick = addClick_;

  function addClick_() {
    MyService.updateClicks();
    vm_.clicks = MyService.clicks;
  }
}]);
