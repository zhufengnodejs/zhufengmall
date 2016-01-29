import angular from 'angular'
import jQuery from 'jquery';
import bootstrap from 'bootstrap';
import routes from './ware.routes'
import navigation from 'components/navigation/'
import wareService from './ware.service'

export default angular.module('ware.index', [navigation])
    .factory('wareService',wareService)
    .config(routes)
    .name;