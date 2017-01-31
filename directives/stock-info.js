/**
 * Created by voliseq on 29.01.2017.
 */
stocksApp.directive("stockInfo", ['$window', '$timeout', function ($window, $timeout) {
    return {
        restrict: "EA",
        templateUrl: 'templates/stock-info.html',
        scope: {
            stockData: "="
        },
        link: function (scope, elem, attrs) {
            console.log(scope.stockData);
        }
    }

}]);