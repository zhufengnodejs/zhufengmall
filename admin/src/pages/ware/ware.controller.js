var  WareController = ($scope,categoryService,wareService) => {
    $scope.wares = wareService.query();
    $scope.categories = categoryService.query();
    $scope.ware = {};
    $scope.add = () => {
        $scope.ware = {};
        $('#addDialog').modal(true);
    }
    $scope.save = () => {
        if($scope.ware._id){
            wareService.update($scope.ware).$promise.then(function(result){
                $scope.wares.map(function(ware){
                    if($scope.ware._id == ware._id){
                        return $scope.ware;
                    }
                });
            });
        }else{
            wareService.save($scope.ware).$promise.then(function(result){
                    $scope.wares.push(result);
            });
        }

    }

    $scope.edit = (ware) => {
        $scope.ware = ware;
        $('#addDialog').modal(true);
    }

    $scope.select = (selectedWare) => {
      $scope.selectedWare = selectedWare;
    }

    $scope.delete = (selectedWare) => {
        wareService.delete(selectedWare).$promise.then(function(result){
            $scope.wares = $scope.wares.filter(function(ware){
               return selectedWare._id != ware._id;
            });
        });
    }
}
WareController.$inject = ['$scope','categoryService','wareService'];

export default WareController;
