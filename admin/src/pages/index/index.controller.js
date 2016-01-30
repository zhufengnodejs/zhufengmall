var IndexController = ($rootScope,$scope,$http,$state) => {
    $scope.login = () => {
        $http.post('http://localhost:3000/users/login',{username:$scope.username}).then((result)=>{
            console.log(result.data);
            $rootScope.user = result.data;
            $state.go('ware');
        });
    }
}

IndexController.$inject = ['$rootScope','$scope','$http','$state'];
export  default IndexController;
