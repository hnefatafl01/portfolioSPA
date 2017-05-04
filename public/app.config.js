(function() {
  'use strict';

  angular.module("app")
    .config(configuration)

  configuration.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider','$mdThemingProvider'];

  function configuration($stateProvider, $urlRouterProvider, $locationProvider, $mdThemingProvider){

    $stateProvider
    .state({
      name: 'home',
      url: '/',
      component: 'home'
    })
    .state({
      name: 'resume',
      url: '/resume',
      component: 'home'
    })

    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey', {
        default: '900'
      })
      .accentPalette('indigo', {
        default: 'A400'
      })
      // .backgroundPalette('blue-grey')
  }
}());
