(function() {
	function pagingService($http) {
	    // service definition
	    var service = {};
	 	// function aliases
	    service.GetPager = GetPager;
	    service.GetData = GetData;
	    // returns the service
	    return service;
	 
	    // service implementation
	    function GetData(amt) {
	    	// grabs sample data in server.js
	    	return $http.get('http://localhost:8080/getdata/'+amt);
	    }
	    // logic for calculating start, end and total page numbers
	    function GetPager(totalItems, currentPage, pageSize) {
	        // default to first page
	        currentPage = currentPage || 1;
	        // default page size is 10
	        pageSize = pageSize || 10;
	        // calculate total pages
	        var totalPages = Math.ceil(totalItems / pageSize);
			// calculate start, end and total pages
	        var startPage, endPage;
	        if (totalPages <= 10) {
	            // less than 10 total pages so show all
	            startPage = 1;
	            endPage = totalPages;
	        } else {
	            // more than 10 total pages so calculate start and end pages
	            if (currentPage <= 6) {
	                startPage = 1;
	                endPage = 10;
	            } else if (currentPage + 4 >= totalPages) {
	                startPage = totalPages - 9;
	                endPage = totalPages;
	            } else {
	                startPage = currentPage - 5;
	                endPage = currentPage + 4;
	            }
	        }
	        // calculate start and end item indexes
	        var startIndex = (currentPage - 1) * pageSize;
	        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
	        // create an array of pages to ng-repeat in the pager control
	        var pages = _.range(startPage, endPage + 1);
	        // return object with all pager properties required by the view
	        return {
	            totalItems: totalItems,
	            currentPage: currentPage,
	            pageSize: pageSize,
	            totalPages: totalPages,
	            startPage: startPage,
	            endPage: endPage,
	            startIndex: startIndex,
	            endIndex: endIndex,
	            pages: pages
	        };
	    }
	}
	// injector for minification protection
	pagingService.$inject = ['$http'];
	// add service to module
    angular
        .module('pagingWidget')
        .service('pagingService', pagingService);
})();