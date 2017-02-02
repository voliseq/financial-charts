/**
 * Created by voliseq on 28.01.2017.
 */
var stocksCtrl = stocksApp.controller('stocksCtrl', ['$scope', 'dataService', 'drawingService','rawData',  function ($scope, dataService, drawingService, rawData) {
    $scope.rawData = rawData.res;
    var dateParser = drawingService.o.dateParser;
    angular.forEach($scope.rawData, function (elem) {
        elem.Date = dateParser(elem.Date);
    });

    var dates = $scope.rawData.map(function (elem) {
        return elem.Date;
    });

    $scope.symbols = [];
    $scope.rawData.map(function (elem) {
        if ($scope.symbols.indexOf(elem.Symbol) == -1) {
            $scope.symbols.push(elem.Symbol);
        }
    });
    $scope.startDate = new Date(Math.min.apply(null, dates));
    $scope.endDate = new Date(Math.max.apply(null, dates));
    $scope.sixMonthsBack = new Date($scope.endDate.getTime() - (86400000 * 30 * 6) );
    $scope.chartData = dataService.betweenDates($scope.rawData, $scope.sixMonthsBack, $scope.endDate);
    $scope.selected = "CSCO";
    $scope.stockData = dataService.changeCompany($scope.rawData, $scope.selected);
    $scope.options = {
        minDate: $scope.startDate,
        maxDate: $scope.endDate
    };
    $scope.selectMin = function (startDate) {
        $scope.startDate = startDate;
        $scope.chartData = dataService.betweenDates($scope.rawData, $scope.startDate, $scope.endDate);
        $scope.stockData = dataService.betweenDates($scope.rawData, $scope.startDate, $scope.endDate);
    };

    $scope.selectMax = function (endDate) {
        $scope.endDate = endDate;
        $scope.chartData = dataService.betweenDates($scope.rawData, $scope.startDate, $scope.endDate);
        $scope.stockData = dataService.betweenDates($scope.rawData, $scope.startDate, $scope.endDate);
    };

    //
    $scope.tabs = [
        { title:'Dynamic Title 1', content:'Dynamic content 1' },
        { title:'Dynamic Title 2', content:'Dynamic content 2', disabled: true }
    ];

    $scope.alertMe = function() {
        setTimeout(function() {
            $window.alert('You\'ve selected the alert tab!');
        });
    };

    $scope.model = {
        name: 'Tabs'
    };

}]);