(function() {
  'use strict';
  angular.module("app")
    .component("home", {
      controller: homeCtrl,
      templateUrl: '/home/home.html'
    })
    .component("slider", {
      controller: sliderCtrl,
      templateUrl: '/home/home.slider.html'
    })
    .component("modal", {
      controller: modalCtrl,
      templateUrl: '/home/home.modal.html'
    })


    function homeCtrl(projectService) {
      const vm = this;

      vm.$onInit = function($index){
        vm.displayedIndex = false;
        vm.show = false;
        vm.background = 'url(/images/montanaSunset.png)';
        projectService.getProjects()
          .then(function(projects){
            vm.projects = projects;
          })
      }
    }

    vm.slide = function(index) {
      index.classlist.toggle('animate')
    }



}());
