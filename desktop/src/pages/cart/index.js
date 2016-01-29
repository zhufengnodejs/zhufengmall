import angular from 'angular'
import routes from './cart.routes'
import navigation from 'components/navigation/'
import cartService from './cart.service'

export default angular.module('cart.index', [navigation])
    .factory('cartService',cartService)
    .config(routes)
    .name;