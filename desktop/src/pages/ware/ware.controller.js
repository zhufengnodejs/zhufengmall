var WareController = ($scope,cartService, wareService) => {
    $scope.wares = wareService.query();
    $scope.add = (ware) => {
        cartService.save(ware).$promise.then(function(result){
            console.log(result);
        });
    }
};
WareController.$inject = ['$scope','cartService','wareService'];

export default WareController;
