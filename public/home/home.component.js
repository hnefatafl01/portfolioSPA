(function() {
  'use strict';
  angular.module('app')
    .component('home', {
      controller: homeCtrl,
      templateUrl: '/home/home.component.html'
    })

    function homeCtrl(projectService, $scope, $location, $anchorScroll) {
      const vm = this;

      vm.$onInit = function() {
        projectService.getProjects()
            .then(function(projects){
                vm.projects = projects;
            });
      };

      vm.top = function() {
        $location.hash('top');
        $anchorScroll();
      }
    }
}());
