/**
 * Created by voliseq on 28.01.2017.
 */
var stocksCtrl = stocksApp.controller('stocksCtrl', ['$scope', '$timeout', 'stockService', function ($scope, $timeout, stockService) {
    var dateParser = stockService.o.dateParser;

    $scope.rawData = rawData.query.results.quote;
    angular.forEach($scope.rawData, function (elem) {
        elem.Date = dateParser(elem.Date);
    });

    var dates = $scope.rawData.map(function (elem) {
        return elem.Date;
    });

    $scope.startDate = new Date(Math.min.apply(null, dates));
    $scope.endDate = new Date(Math.max.apply(null, dates));
    $scope.chartData = $scope.rawData;
    $scope.selectCompany = function (company) {
        $scope.stockData = $scope.rawData.filter(function (elem) {
            return elem.Symbol == company;
        });
    };
    $scope.selectCompany("CSCO");

    $scope.options = {
        minDate: $scope.startDate,
        maxDate: $scope.endDate
    };
    $scope.selectMin = function (startDate) {
        $scope.startDate = startDate;
        $scope.chartData = stockService.betweenDates($scope.rawData, $scope.startDate, $scope.endDate);
        $scope.stockData = stockService.betweenDates($scope.rawData, $scope.startDate, $scope.endDate);
    };

    $scope.selectMax = function (endDate) {
        $scope.endDate = endDate;
        $scope.chartData = stockService.betweenDates($scope.rawData, $scope.startDate, $scope.endDate);
        $scope.stockData = stockService.betweenDates($scope.rawData, $scope.startDate, $scope.endDate);
    }
}]);