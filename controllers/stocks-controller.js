/**
 * Created by voliseq on 28.01.2017.
 */
var stocksCtrl = stocksApp.controller('stocksCtrl', ['$scope', '$timeout','stockService', function ($scope, $timeout, stockService) {

    $scope.rawData = rawData.query.results.quote;
    var dateParser = stockService.o.dateParser;
    var dates = $scope.rawData.map(function (elem) {
        return dateParser(elem.Date);
    });


    $scope.startDate = new Date(Math.min.apply(null, dates));
    $scope.endDate = new Date(Math.max.apply(null, dates));
    $scope.chartData = {startData: $scope.startDate, endData: $scope.endDate, data: $scope.rawData};
    $scope.selectCompany = function(company){
        $scope.stockData = $scope.rawData.filter(function(elem){
            return elem.Symbol == company;
        });
    };
    $scope.selectCompany("CSCO");

    $scope.options = {
        minDate: $scope.startDate,
        maxDate: $scope.endDate
    };
    $scope.selectMin = function (startDate) {
        console.log(startDate);
    };

    $scope.selectMax = function(endDate){
        console.log(endDate);
    }
}]);