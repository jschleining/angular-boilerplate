var boilerPlateApp = angular.module('boilerPlateApp');

boilerPlateApp.controller('HomePageController', ['$scope', 'MyService', 'filterFilter',
    function($scope, MyService, filterFilter) {
  var vm_ = this;
  vm_.localProperty = 'home page property';
  vm_.clicks = MyService.clicks;
  vm_.myArray = [
    {name: 'alpha'},
    {name: 'bravo'},
    {name: 'charlie'},
    {name: 'delta'}
  ];
  vm_.filteredArray = filterFilter(vm_.myArray, 'r');

  vm_.addClick = addClick_;

  /*
   * Call a function from a service.
   */
  function addClick_() {
    MyService.updateClicks();
    vm_.clicks = MyService.clicks;
  }

}]);
