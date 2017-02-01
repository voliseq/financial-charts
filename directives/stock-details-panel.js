/**
 * Created by voliseq on 29.01.2017.
 */
stocksApp.directive("stockDetailsPanel", ['$window', '$timeout', function ($window, $timeout) {
    return {
        restrict: "EA",
        templateUrl: 'templates/stock-details-panel.html',
        scope: {
            stockDetails: "="
        },
        link: function (scope, elem, attrs) {
        }
    }

}]);