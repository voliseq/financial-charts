/**
 * Created by voliseq on 30.01.2017.
 */
stocksApp.directive("stockHighLowChart", ['$window', '$timeout', 'stockService', function ($window, $timeout, stockService) {
    return {
        restrict: "E",
        templateUrl: 'templates/stock-price-chart.html',
        replace: true,
        scope: {
            chartData: "=",
            stockData: "="
        },
        link: function (scope, elem, attrs) {
            var data = scope.chartData;
            var o = stockService.o;

           var changeCompany = function(d) {
                scope.$apply(function () {
                    scope.stockData = stockService.changeCompany(scope.chartData, d);
                })
            };

            var svg = d3.select(elem[0]).append("svg")
                .attr("id", "highLow")
                .attr("width", o.v)
                .attr("height", o.h);

            var chart = svg.append("g")
                .classed("display", true)
                .attr("transform", "translate(" + o.margin.left + "," + o.margin.top + ")");

            var x = d3.scaleTime()
                    .domain(d3.extent(data, function (d) {
                        return d.Date;
                    }))
                    .range([0, o.width]),
                y = d3.scaleLinear()
                    .domain([0, d3.max(data, function (d) {
                        return d.Close;
                    })])
                    .range([o.height, 0]);

            var xAxis = d3.axisBottom(x);
                yAxis = d3.axisLeft(y);

            function plot(params) {
                //update scale
                x.domain(d3.extent(params.data, function (d) {
                    return d.Date;
                }));

                var self = this;

                stockService.drawAxes.call(this, params, 1);
                var symbols = [];
                params.data.map(function (elem) {
                    if (symbols.indexOf(elem.Symbol) == -1) {
                        symbols.push(elem.Symbol);
                    }
                });
                stockService.initCompanies.call(this, changeCompany, symbols);
                var arr = [];
                symbols.forEach(function (symbol, index) {
                    var g = self.selectAll("g." + symbol);
                    arr[index] = params.data.filter(function (elem) {
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

                    g.selectAll(".point")
                        .data(arr[index])
                        .enter()
                        .append("circle")
                        .classed("point", true)
                        .attr("r", 4);

                    //update
                    g.selectAll(".point")
                        .attr("cx", function (d) {
                            var date = d.Date;
                            return x(date);
                        })
                        .attr("cy", function (d) {
                            return y(d.Close);
                        })
                        .on("mouseover", function (d, i) {
                            var info = arr[index][i];
                            d3.select(this)
                                .transition()
                                .attr("r", 6);
                            var str = "Company: " + info.Symbol;
                            str += ", High: " + info.High;
                            str += ", Low: " + info.Low;
                            str += ", Volume: " + info.Volume;
                            str += ", Date: " + o.format(info.Date);
                            d3.select(".chart-header").text(str);
                        })
                        .on("mouseout", function (d, i) {
                            d3.select(this)
                                .transition()
                                .attr("r", 4);
                            d3.select(".chart-header").text("");
                        });

                    self.select("text.label")
                        .style("opacity", function (d, i) {
                            if (index > 2) {
                                var path = d3.selectAll("g." + symbol + " .point");
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
                            var path = self.selectAll("g." + symbol + " .point");
                            var label = d3.select(this);
                            parseInt(label.style("opacity")) ? label.style("opacity", 0.3) : label.style("opacity", 1);
                            path.style("display") == "inline" ? path.style("display", "none") : path.style("display", "inline");

                        });

                    //exit
                    self.selectAll(".label")
                        .data(symbols)
                        .exit()
                        .remove();

                    g.selectAll(".point")
                        .style("fill", function (d, i) {
                            return o.colorScale(index);
                        });

                    g.selectAll(".point")
                        .data(arr[index])
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
                    width: o.width
                });
            });
        }

    }

}]);