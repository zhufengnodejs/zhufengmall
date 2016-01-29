import angular from 'angular'
import jQuery from 'jquery';
import bootstrap from 'bootstrap';
import routes from './category.routes'
import navigation from 'components/navigation/'
import categoryService from './category.service'

export default angular.module('category.index', [navigation])
    .factory('categoryService',categoryService)
    .config(routes)
    .name;