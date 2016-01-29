import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ngResource from 'angular-resource'
import routesConfig from 'config/routes.config.js'
import index from 'pages/index/'
import category from 'pages/category/'
import ware from 'pages/ware/'
angular.module('zhufengMall', [uiRouter,ngResource,index,category,ware]).config(routesConfig)