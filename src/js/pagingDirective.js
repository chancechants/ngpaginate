(function() {

    angular
        .module('pagingWidget')
		.directive('pagingDirective', function () {
		    return {
		      templateUrl: 'js/pagingDirective.html'
		};
  });

}());