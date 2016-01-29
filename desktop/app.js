import angular from 'angular'
import uiRouter from 'angular-ui-router'
import ngResource from 'angular-resource'
import routesConfig from 'config/routes.config.js'
import index from 'pages/index/'
import ware from 'pages/ware/'
import cart from 'pages/cart/'
angular.module('zhufengMall', [uiRouter,ngResource,index,ware,cart]).config(routesConfig).config(($httpProvider)=>{
        $httpProvider.defaults.withCredentials = true;

})