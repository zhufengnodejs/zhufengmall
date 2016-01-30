export default function run($rootScope) {
    $rootScope.$on('$stateChangeSuccess',function(event,toState,toParams,fromState,fromParams){
        $rootScope.status = toState.name;
    });
}

run.$inject = ['$rootScope'];

