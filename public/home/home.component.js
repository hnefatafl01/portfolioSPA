(function() {
  'use strict';
  angular.module('app')
    .component('home', {
      controller: homeCtrl,
      templateUrl: '/home/home.component.html'
    })

    function homeCtrl() {
      const vm = this;

      vm.$onInit = function() {
        console.log('home loaded');
        vm.displayedIndex = false;
        vm.show = false;
      };
    }
}());
