stocksApp.service('dataService', ['$http', '$q', function ($http, $q) {
    this.getData = function(){
        var deferred = $q.defer();
        $http.get("data.json").then(function(res){
            deferred.resolve({
                res: res.data.query.results.quote
            })
        });
        return deferred.promise;
    };

    this.changeCompany = function (arr, symbol) {
        return arr.filter(function (elem) {
            return elem.Symbol == symbol;
        })
    };

    this.betweenDates = function (arr, startDate, endDate) {
        return arr.filter(function (elem) {
            var date = elem.Date;
            return date.getTime() >= startDate.getTime() && date.getTime() <= endDate.getTime();
        })
    };

}]);