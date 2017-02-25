(function() {
  'use strict';
  angular.module("app")
    .component("main", {
      controller: mainCtrl,
      templateUrl: '/main/main.html'
    })

    function mainCtrl() {
      const vm = this;

      vm.$onInit = function(){
          console.log('main');
      }
    }
}());
