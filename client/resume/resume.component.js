(function() {
  'use strict';

  module.("app").component("resume",{
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
