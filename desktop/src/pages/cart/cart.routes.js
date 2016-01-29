import angular from 'angular'
import template from './cart.jade'
import controller from './cart.controller'

function routes($stateProvider) {
    $stateProvider
        .state('cart', {
            url: '/cart',
            template: template,
            controller: controller
        });
}

routes.$inject = ['$stateProvider'];

export default routes;

