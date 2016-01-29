var CartController = ($scope, cartService) => {
    $scope.carts = cartService.query();
    $scope.delete = (cart) => {
        console.log(cart);
        $scope.carts = $scope.carts.filter(function(curr){
            return curr._id != cart._id;
        });
    }
    $scope.total = () => {
      var sum = 0;
      $scope.carts.forEach(function(cart){
          sum+=(cart.ware.price * cart.quantity);
      });
      return sum;
    }

    $scope.settle = () => {
        alert('结算完成');
    }

};
CartController.$inject = ['$scope','cartService'];

export default CartController;
