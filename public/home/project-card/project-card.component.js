(function(){
    'use strict';

    angular.module('app')
        .component('projectCard', {
            controller: projectCtrl,
            templateUrl: '/home/project-card/project-card.component.html'
        });
      
    function projectCtrl(projectService) {
        const vm = this;

        vm.$onInit = function() {
            console.log('projects loaded');
            projectService.getProjects()
                .then(function(projects){
                    vm.projects = projects;
                });
        };
    }

}());