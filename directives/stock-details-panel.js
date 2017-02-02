/**
 * Created by voliseq on 29.01.2017.
 */
stocksApp.directive("stockDetailsPanel", ['$window', 'dataService', function ($window, dataService) {
    return {
        restrict: "EA",
        templateUrl: 'templates/directives/stock-details-panel.html',
        replace: true,
        scope: {
            stockData: "="
        },
        link: function (scope, elem, attrs) {
            scope.$watch("stockData", function (newValue, oldValue) {
                scope.stockDetails = dataService.stockDetails(newValue);
            })
        }
    }

}]);