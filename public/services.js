(function() {
  'use strict';

  angular.module("app")
    .service("projectService", projectService)

    function projectService($http) {
      this.getProjects = function(){
        return $http.get('./projects.json')
          .then(function(result) {
            return result.data;
          })
      }
    }

}());
