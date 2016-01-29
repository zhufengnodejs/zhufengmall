var CartController = ($scope, cartService) => {
    $scope.carts = cartService.query();
    $scope.add = () => {

    }

};
CartController.$inject = ['$scope','cartService'];

export default CartController;
