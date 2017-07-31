(function() {
  'use strict';
  angular.module('app')
    .component('home', {
      controller: homeCtrl,
      templateUrl: '/home/home.component.html'
    })

    function homeCtrl(projectService) {
      const vm = this;

      vm.$onInit = function() {
        console.log('home loaded');
        projectService.getProjects()
            .then(function(projects){
                vm.projects = projects;
                console.log(vm.projects)
            });
      };
    }
}());
