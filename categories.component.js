(function() {
    angular.module('MenuApp')
      .component('categories', {
        templateUrl: 'categories.template.html',
        controller: CategoriesController,
        bindings: {
          categories: '<'
        }
      });
  
    function CategoriesController() {
      var $ctrl = this;
  
      $ctrl.$onInit = function() {
        // Initialization logic (if needed)
      };
    }
  })();
  