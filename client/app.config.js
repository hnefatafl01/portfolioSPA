(function() {
  'use strict';

  angular.module("app")
    .config(configuration)

  configuration.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

  function configuration($stateProvider, $urlRouterProvider, $locationProvider){

    $stateProvider
    // .state({
    //   name: 'home.backdrop',
      // url: '/home',
    //   abstract: true,
    //   component: 'home'
    // })
    .state({
      name: 'home',
      url: '/',
      component: 'home'
    })
    .state({
      name: 'home.resume',
      url: '/resume',
      component: 'home'
    })

  }
}());
