(function() {
  'use strict';

  angular.module("app")
    .component("home.resume", {
      controller: resumeCtrl,
      templateUrl: '/resume/resume.html'
    })

  function resumeCtrl(){
    const vm = this;

    vm.$onInit = function() {
      console.log('resume');
    }
  }

}());
