var  CategoryService = $resource => {
    return $resource('http://localhost:3000/categories/:_id',{
        _id:'@_id'
    },{
        update:{
            method:'PUT'
        }
    });
}

CategoryService.$inject = ['$resource'];

export default CategoryService;
