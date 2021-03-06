/**
 * Created by voliseq on 30.01.2017.
 */
stocksApp.directive("stockPriceChart", ['$window', '$timeout', "drawingService", 'dataService', function ($window, $timeout, drawingService, dataService) {
    return {
        restrict: "E",
        templateUrl: 'templates/directives/stock-price-chart.html',
        replace: true,
        scope: {
            chartData: "=",
            stockData: "="
        },
        link: function (scope, elem, attrs) {
            var data = scope.chartData;
            var o = drawingService.o;

            var changeCompany = function (d) {
                scope.$apply(function () {
                    scope.stockData = dataService.changeCompany(scope.chartData, d);
                })
            };

            var svg = d3.select(elem[0]).append("svg")
                .attr("id", "priceTime")
                .attr("width", o.v)
                .attr("height", o.h);

            var chart = svg.append("g")
                .classed("display", true)
                .attr("transform", "translate(" + o.margin.left + "," + o.margin.top + ")");

            var colorScale = d3.scaleOrdinal(d3.schemeCategory10),
                x = d3.scaleTime()
                    .domain(d3.extent(data, function (d) {
                        return d.Date;
                    }))
                    .range([0, o.width]),
                y = d3.scaleLinear()
                    .domain([0, d3.max(data, function (d) {
                        return d.Close;
                    })])
                    .range([o.height, 0]);
            var xAxis = d3.axisBottom(x),
                yAxis = d3.axisLeft(y);

            var line = d3.line()
                .x(function (d) {
                    return x(d.Date);
                })
                .y(function (d) {
                    return y(d.Close);
                });

            function plot(params) {
                x.domain(d3.extent(params.data, function (d) {
                    return d.Date;
                }));

                var self = this;

                drawingService.drawAxes.call(this, params);
                var symbols = dataService.extractSymbols(params.data);
                drawingService.initCompanies.call(this, changeCompany, symbols);

                symbols.forEach(function (symbol, index) {
                    var g = self.selectAll("g." + symbol);
                    var arr = params.data.filter(function (elem) {
                        return elem.Symbol == symbol;
                    });
                    //enter
                    self.select("g.legend")
                        .selectAll(".label")
                        .data(symbols)
                        .enter()
                        .append("text")
                        .attr("class", function (d) {
                            return d;
                        })
                        .classed("label", true);

                    g.selectAll(".trendline")
                        .data([arr])
                        .enter()
                        .append("path")
                        .classed("trendline", true);

                    //updatet rendline
                    g.selectAll(".trendline")
                        .attr("d", function (d) {
                            return params.line(d);
                        })
                        .style("stroke", function (d, i) {
                            return colorScale(index);
                        })
                        .on("mouseover", function (d) {
                            d3.select("." + symbol + " .trendline")
                                .style("stroke-width", "9px");

                        })
                        .on("mouseout", function (d) {
                            d3.select("." + symbol + " .trendline")
                                .style("stroke-width", "7px");
                        });

                    self.select("text.label")
                        .style("opacity", function (d, i) {
                            if (index > 2) {
                                var path = d3.selectAll("g." + symbol + " .trendline");
                                var label = d3.selectAll("text.label." + symbol);
                                label.style("opacity", 0.3);
                                path.style("display", "none");
                            }
                        });

                    self.select(".legend .label." + symbol)
                        .attr("transform", "translate(" + (0 + index * 80) + "," + (o.height + 110) + ")")
                        .attr("dy", ".35em")
                        .attr("text-anchor", "start")
                        .style("fill", function (d, i) {
                            return o.colorScale(index);
                        })
                        .text(symbol)
                        .on("click", function (d) {
                            var path = self.selectAll("g." + symbol + " .trendline");
                            var label = d3.select(this);
                            parseInt(label.style("opacity")) ? label.style("opacity", 0.3) : label.style("opacity", 1);
                            path.style("display") == "inline" ? path.style("display", "none") : path.style("display", "inline");
                        });


                    //exit
                    self.selectAll(".label")
                        .data(symbols)
                        .exit()
                        .remove();

                    g.selectAll(".trendline")
                        .data([arr])
                        .exit()
                        .remove();

                });
            }

            plot.call(chart, {
                data: data,
                axis: {
                    x: xAxis,
                    y: yAxis
                },
                height: o.height,
                width: o.width,
                line: line,
                initialize: true
            });

            scope.$watch("chartData", function (newValue, oldValue) {
                plot.call(chart, {
                    data: newValue,
                    axis: {
                        x: xAxis,
                        y: yAxis
                    },
                    height: o.height,
                    width: o.width,
                    line: line
                });
            });

        }
    }

}]);