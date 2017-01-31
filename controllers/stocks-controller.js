/**
 * Created by voliseq on 28.01.2017.
 */
var stocksCtrl = stocksApp.controller('stocksCtrl', ['$scope', '$timeout', function ($scope, $timeout) {

    $scope.rawData = rawData.query.results.quote;

    var dateParser = d3.timeParse("%Y-%m-%d");
    var dates = $scope.rawData.map(function (elem) {
        return dateParser(elem.Date);
    });

    $scope.startDate = new Date(Math.min.apply(null, dates));
    $scope.endDate = new Date(Math.max.apply(null, dates));
    $scope.stockData = rawData.query.results.quote;

    $scope.chartData = {startData: $scope.startDate, endData: $scope.endDate, data: $scope.rawData};






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