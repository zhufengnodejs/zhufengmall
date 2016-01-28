import angular from 'angular'
import template from './navigation.jade'
import controller from './navigation.controller'
var navigation =[
    () => {
        return {
            restrict: 'EA',
            template: template,
            controller:controller
        }
    }
]

navigation.$inject = ['$scope','$location'];

export default angular.module('navigation', [])
    .directive('zfNavigation', navigation)
    .name;