(function() {
  'use strict';

  angular.module('app')
    .service('projectService', projectService)
    .factory('detailService', detailService)

    function projectService($http) {
      this.getProjects = function(){
        return $http.get('./projects.json')
          .then(function(result) {
            return result.data;
          });
      };
    }

    function detailService($mdDialog) {
      return function(data, ev){
        $mdDialog.show({
            locals: {
                project: data
            },
            controller: ['$scope', 'project', function($scope, project) {
                $scope.project = project;
                $scope.hide = function() {
                    $mdDialog.hide();
                };
                $scope.cancel = function() {
                      $mdDialog.cancel();
                };
                $scope.answer = function(answer) {
                      $mdDialog.hide(answer);
                };
            }],
            templateUrl: '/home/project-details/project-details.component.html',
            controllerAs: 'ctrl',
            bindToController: true,
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,

        });
      };
    }

}());
