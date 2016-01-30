import routes from './index.routes'
import run from './index.run'
import navigation from 'components/navigation/'

export default angular.module('index.index', [navigation])
    .config(routes)
    .run(run)
    .name;