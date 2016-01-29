export default function routesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
};

routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];