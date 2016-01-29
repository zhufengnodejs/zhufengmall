import angular from 'angular'
import jQuery from 'jquery';
import bootstrap from 'bootstrap';
import routes from './category.routes'
import navigation from 'components/navigation/'
import categoryService from './category.service'
import addCategory from './directive/add.category'

export default angular.module('category.index', [navigation])
    .factory('categoryService',categoryService)
    .directive('addCategory',addCategory)
    .config(routes)
    .name;