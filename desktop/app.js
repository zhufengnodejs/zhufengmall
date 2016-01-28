import angular from 'angular'
import uiRouter from 'angular-ui-router'
import routesConfig from 'config/routes.config.js'
import index from 'pages/index/'

angular.module('zhufengMall', [uiRouter,index]).config(routesConfig)