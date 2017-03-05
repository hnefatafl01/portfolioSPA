(function() {
  'use strict';

  angular.module("app")
    .config(configuration)

  configuration.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function configuration($stateProvider, $urlRouterProvider, $locationProvider){

    $stateProvider
      .state({
        name: 'home',
        url: '/home',
        component: 'home',
      })
      .state({
        name: 'resume',
        url: '/resume',
        component: 'home.resume',
      })
  }
}());
