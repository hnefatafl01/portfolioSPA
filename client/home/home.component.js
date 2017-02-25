(function() {
  'use strict';
  angular.module("app")
    .component("home", {
      controller: homeCtrl,
      templateUrl: '/home/home.html'
    })

    function homeCtrl() {
      const vm = this;

      vm.$onInit = function(){
          console.log('main');
      }
    }
}());
