export default class IndexController {
    constructor($scope,$http) {
        this.$scope = $scope;
        this.$http = $http;
        this._init();
    }

    _init() {
       this.login = () => {
           this.$http.post('http://localhost:3000/users/login',{username:this.$scope.username}).then((result)=>{
               console.log(result.data);
           });
       }

    }
}

IndexController.$inject = ['$scope','$http'];
