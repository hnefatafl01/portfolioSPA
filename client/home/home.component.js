(function() {
  'use strict';
  angular.module("app")
    .component("home", {
      controller: homeCtrl,
      templateUrl: '/home/home.html'
    })

    function homeCtrl() {
      const vm = this;
      vm.images = ["../images/nodejs-new-pantone-black.png", "../images/angular.png","../images/bulma-logo.png"];

      vm.projects  = [
        {
          title: 'GitFit',
          version: '1.0.0',
          description: 'A simple mobile-first app for tracking workout data. Designed to provide a fast and easy tool for Fitness Pros and Exercise Enthusiasts to plan and track training variables for their workouts.',
          techImgs: ['/images/bulma-logo'],
          date: 'November 2016'
        },{
          title: 'uXplor',
          version: '1.0.0',
          description: 'A gamified scavenger hunt using google places API.',
          techImgs: ''
        },{
          title: 'Pandora\'\s Box',
          version: '1.0.0',
          description: 'Pandora\'\s Box is a mobile app and Internet of Things project designed to streamline and gamify interactions with parents and children on the subject of chores or tasks. It sets up a system where there is a tangible reward controlled by the mobile application.',
          techImgs: ''
        }
      ];

      vm.$onInit = function($index){
          console.log('main');
          console.log(vm.projects[1].description);
          vm.displayedIndex = false;
          vm.background = 'url(/images/montanaSunset.png)';

          vm.myInterval = 5000;
          vm.noWrapSlides = false;
          vm.active = 0;
          var slides = vm.slides = vm.images;
          var currIndex = 0;

      }



    }
}());
