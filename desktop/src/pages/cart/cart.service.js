var  WareService = $resource => {
    return $resource('http://localhost:3000/carts/:_id',{
        _id:'@_id'
    },{
        update:{
            method:'PUT'
        }
    });
}

WareService.$inject = ['$resource'];

export default WareService;
