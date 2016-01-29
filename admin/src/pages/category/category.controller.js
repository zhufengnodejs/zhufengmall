var  CategoryController = ($scope,categoryService) => {
    $scope.categories = categoryService.query();
    $scope.category = {};
    $scope.add = () => {
        $scope.category = {};
        $('#addDialog').modal(true);
    }
    $scope.save = () => {
        if($scope.category._id){
            categoryService.update($scope.category).$promise.then(function(result){
                $scope.categories.map(function(category){
                    if($scope.category._id == category._id){
                        return $scope.category;
                    }
                });
            });
        }else{
            categoryService.save($scope.category).$promise.then(function(result){
                    $scope.categories.push(result);
            });
        }

    }

    $scope.edit = (category) => {
        $scope.category = category;
        $('#addDialog').modal(true);
    }

    $scope.select = (selectedCategory) => {
      $scope.selectedCategory = selectedCategory;
    }

    $scope.delete = (selectedCategory) => {
        categoryService.delete(selectedCategory).$promise.then(function(result){
            $scope.categories = $scope.categories.filter(function(category){
               return selectedCategory._id != category._id;
            });
        });
    }
}
CategoryController.$inject = ['$scope','categoryService'];

export default CategoryController;
