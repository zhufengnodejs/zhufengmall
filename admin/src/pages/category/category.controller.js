export default class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
        this._init();
    }

    _init() {
          this.categories = this.categoryService.query();
    }
}

CategoryController.$inject = ['categoryService'];
