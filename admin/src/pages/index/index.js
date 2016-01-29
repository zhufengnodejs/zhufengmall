import angular from 'angular'
import routes from './index.routes'
import navigation from 'components/navigation/'

export default angular.module('index.index', [navigation])
    .config(routes)
    .name;