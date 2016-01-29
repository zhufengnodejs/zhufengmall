import angular from 'angular'
import template from './index.jade'
import controller from './index.controller'

export default function routes($stateProvider) {
    $stateProvider
        .state('index', {
            url: '/',
            template: template,
            controller: controller,
            controllerAs: 'index',
            bindToController: true
        });
}

routes.$inject = ['$stateProvider'];

