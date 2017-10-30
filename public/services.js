(function() {
  'use strict';

  angular.module('app')
    .service('projectService', projectService)
    .factory('detailFactory', detailFactory)

    function projectService($http) {
      this.getProjects = function(){
        return $http.get('./projects.json')
          .then(function(result) {
            return result.data;
          });
      };
    }

    function detailFactory($mdDialog) {
      return function(data, event){
        $mdDialog.show({
            locals: {
                project: data
            },
            controller: ['$scope', 'project', function($scope, project) {
                $scope.project = project;
                $scope.hide = function() {
                    let show = false;
                    $mdDialog.hide(show);
                };
                $scope.cancel = function() {
                    let show = false;
                    $mdDialog.cancel(show);
                    return show;
                };
                $scope.checkDisabled = function() {
                    return $scope.project.deployed ? true : false;
                };
            }],
            templateUrl: '/home/project-details/project-details.component.html',
            controllerAs: 'ctrl',
            bindToController: true,
            parent: angular.element(document.body),
            targetEvent: event,
            clickOutsideToClose: true
        });
      };
    }

}());
