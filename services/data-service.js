stocksApp.service('dataService', ['$http', function ($http) {
    this.getData = function(){
        return $http.get("data.json");
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