(function(){
  'use strict';
    angular.module('app')
        .component('about', {
            controller: aboutCtrl,
            templateUrl: '/home/about/about.component.html'
        });

    function aboutCtrl() {
        const vm = this;
        vm.$onInit = function() {
          
        }
    }
}());
