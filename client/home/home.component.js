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

    function homeCtrl() {
      const vm = this;


      vm.projects  = [
        {
          title: 'GitFit',
          version: '1.0.0',
          description: 'A simple mobile-first app for tracking workout data and picking exercises based on muscle group. Designed to provide a fast and easy tool for Fitness Pros and Exercise Enthusiasts to plan and track training variables for their workouts.',
          techImgs: ['/images/bulma-logo'],
          date: 'November 2016',
          deployed: 'https://gitfit-8d961.firebaseapp.com/',
          github: 'https://github.com/hnefatafl01/GitFit/tree/master/client'
        },{
          title: 'uXplor',
          version: '1.0.0',
          description: 'A gamified scavenger hunt using google places API.',
          techImgs: '',
          date: 'January 2017',
          deployed: 'https://uxplor-7ce2a.firebaseapp.com/',
          github: ['https://github.com/TN5/uxplor-Client-side','https://github.com/TN5/uxplor-Server-side']
        },{
          title: 'Pandora\'\s Box',
          version: '1.0.0',
          description: 'Pandora\'\s Box is a mobile app and Internet of Things project designed to streamline and gamify interactions with parents and children on the subject of chores or tasks. It sets up a system where there is a tangible reward controlled by the mobile application.',
          techImgs: '',
          date: 'February 2017',
          deployed: null,
          github: 'https://github.com/pandoras-box'
        }
      ];

      vm.$onInit = function($index){
        vm.displayedIndex = false;
        vm.background = 'url(/images/montanaSunset.png)';
      }
    }

    function sliderCtrl($interval) {
      const vm = this;
      vm.images = ["/images/nodejs-new-pantone-black.png", "/images/angular.png","/images/bulma-logo.png"];

      vm.$onInit = function(){
        vm.currentIndex = 0;
        vm.slideRoll();
      }

      vm.slideRoll = function() {
        console.log(vm.currentIndex);

        $interval(function() {
          vm.currentImage = vm.images[vm.currentIndex];
          if(vm.currentImage === vm.images[vm.images.length]) {
            vm.currentIndex = 0;
          }
          vm.currentIndex++;
          console.log('animate slide');
        }, 3000);
      }
    }

}());
