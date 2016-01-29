export default class NavigationController {
    constructor($location) {
        this.$location = $location;
        this._init();
    }

    _init() {
        this.isActive = function(path){
            return path == $location.path();
        }
    }
}

NavigationController.$inject = ['$location'];
