// (function(){
//     'use strict';

//     angular.module('app')
//         .component('projectDetails', {
//             controller: detailsCtrl,
//             templateUrl: '/home/project-details/project-details.component.html',
//             bindings: {
//                 data: '<',
//                 index: '<'
//             }
//         });
//     function detailsCtrl($mdDialog) {
//         const vm = this;

//         vm.$onInit = function() {
//             console.log('project-details', vm.project);
//             // console.log(vm.project);
//             // console.log('details index',vm.index);

//         };  
//         vm.closeDialog = function() {
//             console.log('close');
//         };
//     }
// }());