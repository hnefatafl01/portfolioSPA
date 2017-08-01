(function(){
    'use strict';

    angular.module('app')
        .component('projectCard', {
            controller: projectCtrl,
            templateUrl: '/home/project-card/project-card.component.html',
            bindings: {
                data: '<',
                index: '<'
            }
        });
      
    function projectCtrl(detailService) {
        const vm = this;

        vm.$onInit = function() {
            console.log('projects loaded');
            vm.show = false;
        };

        vm.showDetails = function(data) {
            vm.project = data;
            detailService(vm.project);
        };

        vm.checkLive = function() {
            // return vm.project.deployed.length < 1 ? true : false;
            console.log(vm.project.deployed.length)
        };
    }
}());