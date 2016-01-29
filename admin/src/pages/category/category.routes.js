import angular from 'angular'
import template from './category.jade'
import controller from './category.controller'

function routes($stateProvider) {
    $stateProvider
        .state('category', {
            url: '/category',
            template: template,
            controller: controller,
            controllerAs: 'categoryCtrl',
            bindToController: true
        });
}

routes.$inject = ['$stateProvider'];

export default routes;

