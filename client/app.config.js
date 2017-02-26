(function() {
  'use strict';

  angular.module("app")
    .config(configuration)

  configuration.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function configuration($stateProvider, $urlRouterProvider, $locationProvider){

    $locationProvider.html5Mode(true)

    $stateProvider
      .state({
        name: 'home',
        url: '/',
        component: 'home',
      })
      .state({
        name: 'resume',
        url: '/resume/resume',
        component: 'home.resume',
      })
  }

}());
