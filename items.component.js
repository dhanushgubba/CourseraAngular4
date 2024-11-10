(function() {
    angular.module('MenuApp')
      .component('items', {
        templateUrl: 'items.template.html',
        controller: ItemsController,
        bindings: {
          items: '<'
        }
      });
  
    function ItemsController() {
      var $ctrl = this;
  
      $ctrl.$onInit = function() {
        // Initialization logic (if needed)
      };
    }
  })();
  