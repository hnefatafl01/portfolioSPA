(function() {
  'use strict';
  angular.module("app")
    .component("home", {
      controller: homeCtrl,
      templateUrl: '/home/home.html'
    })

    function homeCtrl() {
      const vm = this;
      vm.images = []
      vm.projects  = [
        {
          title: 'GitFit',
          description: 'A simple mobile-first app for tracking workout data. Designed to provide a fast and easy tool for Fitness Pros and Exercise Enthusiasts to plan and track training variables for their workouts.',
          techImgs: '/images/bulma-logo'
        },{
          title: 'uXplor',
          description: 'A gamified scavenger hunt using google places API.',
          techImgs: ''
        }
      ];

      vm.$onInit = function(){
          console.log('main');
          console.log(vm.projects[0].title);
          vm.showCard = false;
      }

      // vm.toggleCard = function() {
      //   vm.showCard = !vm.showCard;
      // }
    }
}());
