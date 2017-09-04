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

    function projectCtrl(detailFactory) {
        const vm = this;

        vm.$onInit = function() {
            vm.show = false;
            vm.disabled = !vm.data.deployed ? true : false;
        };

        vm.showDetails = function(data) {
            vm.show = !vm.show;
            vm.project = data;
            detailFactory(vm.project);
        };
    }
}());
