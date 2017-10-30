(function(){
    'use strict';

    angular.module('app')
        .component('projectCard', {
            controller: projectCtrl,
            templateUrl: '/home/project-card/project-card.component.html',
            bindings: {
                data: '<'
            }
        });

    function projectCtrl(detailFactory) {
        const vm = this;

        vm.$onInit = function() {
            vm.disabled = !vm.data.deployed ? true : false;
        };

        vm.showDetails = function(data, e) {
            vm.project = data;
            detailFactory(vm.project, e);
        };
    }
}());
