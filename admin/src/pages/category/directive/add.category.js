
console.log($);
var addCategory = () => {
  return {
      link: ($scope,element,attrs) => {
          console.log(jQuery('#addDialog'));
          //$('#addDialog').modal(true);
          //angular.element($('#addDialog')[0]).modal(true);
      }
  }
}

addCategory.$inject = [];

export default addCategory;

