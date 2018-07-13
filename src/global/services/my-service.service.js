var boilerPlateApp = angular.module('boilerPlateApp');

boilerPlateApp.service('MyService', function() {
  var service_ = this;
  service_.clicks = 0;

  service_.updateClicks = updateClicks_;

  function updateClicks_() {
    service_.clicks++;
  }

});
