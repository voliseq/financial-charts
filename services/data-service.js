stocksApp.service('dataService', ['$http', function ($http) {

    var self = this;

    this.getData = function () {
        return $http.get("data.json").then(function (res) {
               return res.data.query.results.quote
        });
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

    this.extractSymbols = function (arr) {
        var symbols = [];
        arr.map(function (elem) {
            if (symbols.indexOf(elem.Symbol) == -1) {
                symbols.push(elem.Symbol);
            }
        });
        return symbols;
    };

    this.stockDetails = function (arr) {
        var symbols = self.extractSymbols(arr);
        var results = [];
        symbols.forEach(function (symbol, index) {
            var company = self.changeCompany(arr, symbol);
            results.push({
                symbol: symbol,
                entries: company.length,
                highest: d3.max(company, function (d) {
                    return d.High;
                }),
                lowest: d3.min(company, function (d) {
                    return d.Low;
                }),
                last: company[0].Close,
                first: company[company.length - 1].Close
            })
        });
        return results;
    }

}]);