(function(){
    'use strict';

    angular.module('app')
        .component('projectDetails', {
            controller: detailsCtrl,
            templateUrl: '/home/project-details/project-details.component.html',
            bindings: {
                project: '='
            }
        });
    function detailsCtrl() {
        const vm = this;

        vm.$onInit = function() {
            console.log('project-details');
            console.log(vm.project);
        };  
    }
}());