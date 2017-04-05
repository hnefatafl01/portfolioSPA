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
        vm.background = 'url(/images/montanaSunset.png)';
        projectService.getProjects()
          .then(function(projects){
            vm.projects = projects;
          })
      }
    }

    function sliderCtrl($interval) {
      const vm = this;
      vm.images = ["/images/nodejs-new-pantone-black.png", "/images/angular.png","/images/bulma-logo.png"];

      vm.$onInit = function(){
        vm.currentIndex = 0;

        // vm.slideRoll();
      }

      // vm.slideRoll = function() {
      //   console.log(vm.currentIndex);
      //
      //   $interval(function() {
      //     vm.currentImage = vm.images[vm.currentIndex];
      //     if(vm.currentImage === vm.images[vm.images.length]) {
      //       vm.currentIndex = 0;
      //     }
      //     vm.currentIndex++;
      //     console.log('animate slide');
      //   }, 3000);
      // }
    }

    function modalCtrl(){
      const vm = this;
      vm.modalShown = false;
      console.log('hi');
      vm.toggleModal = function() {
        console.log('clicked');
        vm.modalShown = !vm.modalShown;
      };
    }

}());
