/**
 * Created by voliseq on 28.01.2017.
 */
var stocksApp = angular.module('stocks', ['ui.bootstrap', 'ui.router']);
stocksApp.config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("stocks", {
            url: "",
            templateUrl: "templates/charts.html",
            controller: "stocksCtrl",
            resolve:{
                rawData: ['dataService', function(dataService){

                    return dataService.getData();

                }]
            }
        })
}]);