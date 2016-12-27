(function() {
	function pagingCtrl($scope, pagingService) {
		// init pager
        $scope.pager = {};
        // function aliases
        $scope.setPage = setPage;
        $scope.doSort = doSort;
        $scope.reseed = reseed;
        // default sort, index and seed
        $scope.sortDirection = true;
        var firstIndex = 1;
        $scope.seed = 2000;
        $scope.working = 'yes';
        // init controller
        init();
        // functions
        function init() {
	        $scope.sortBy = 'joined';
	    	pagingService.GetData($scope.seed)
	        .then(function(response) {
	            $scope.dummyItems = response.data.dummyItems;
                $scope.loadTime = response.data.duration;
	            $scope.setPage(1);
	        }, function(data, status, headers, config) {
	            //handle error
	        });
        }
        // returns slice of array that for provided page number
        function setPage(page) {
            if (page < 1 || page > $scope.pager.totalPages) {
                return;
            }
            // get pager object from service
            $scope.pager = pagingService.GetPager($scope.dummyItems.length, page);
            // get current page of items
            $scope.items = $scope.dummyItems.slice($scope.pager.startIndex, $scope.pager.endIndex + 1);
        }
        // sets sortBy and asc/desc
        function doSort(sortBy) {
        	var asc = $scope.sortDirection;
        	$scope.sortBy = sortBy;
        	if (asc === true) {
        		$scope.sortDirection = false;
        	} else if (asc === false) {
        		$scope.sortDirection = true;
        	}
        }
        // reseed
        function reseed() {
            $scope.working = 'maybe';
            $scope.sortBy = 'joined';
            pagingService.GetData($scope.seed)
            .then(function(response) {
                $scope.dummyItems = response.data.dummyItems;
                $scope.setPage(1);
                $scope.working = 'yes';
                $scope.loadTime = response.data.duration;
            }, function(data, status, headers, config) {
                $scope.working = 'no';
                $scope.errorMsg = data.data;
            });
        }        
	}
	// injector for minification protection
	pagingCtrl.$inject = ['$scope', 'pagingService'];
	// add controller to module
    angular
        .module('pagingWidget')
        .controller('pagingCtrl', pagingCtrl);
})();