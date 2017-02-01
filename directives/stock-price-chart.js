/**
 * Created by voliseq on 30.01.2017.
 */
stocksApp.directive("stockPriceChart", ['$window', '$timeout', "stockService",  function ($window, $timeout, stockService) {
    return {
        restrict: "E",
        templateUrl: 'templates/stock-price-chart.html',
        replace: true,
        scope: {
            chartData: "="
        },
        link: function (scope, elem, attrs) {
            var data = scope.chartData;
            var v = 800,
                h = 500,
                margin = {
                    top: 70,
                    bottom: 150,
                    left: 80,
                    right: 20
                };

            var width = v - margin.left - margin.right,
                height = h - margin.top - margin.bottom;

            var svg = d3.select(elem[0]).append("svg")
                .attr("id", "priceTime")
                .attr("width", v)
                .attr("height", h);

            var chart = svg.append("g")
                .classed("display", true)
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            var dateParser = d3.timeParse("%Y-%m-%d");

            var colorScale = d3.scaleOrdinal(d3.schemeCategory10),
                x = d3.scaleTime()
                    .domain(d3.extent(data, function (d) {
                        return d.Date;
                    }))
                    .range([0, width]),
                y = d3.scaleLinear()
                    .domain([0, d3.max(data, function (d) {
                        return d.Close;
                    })])
                    .range([height, 0]);
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
                stockService.drawAxes.call(this, params);
                var self = this;
                var symbols = [];
                params.data.map(function (elem) {
                    if (symbols.indexOf(elem.Symbol) == -1) {
                        symbols.push(elem.Symbol);
                    }
                });

                this.selectAll(".company")
                    .data(symbols)
                    .enter()
                    .append("g")
                    .attr("class", function (d) {
                        return d;
                    })
                    .classed("company", true);

                this.selectAll("company")
                    .data(symbols)
                    .exit()
                    .remove();

                symbols.forEach(function (symbol, index) {
                    var g = self.selectAll("g." + symbol);
                    var arr = params.data.filter(function (elem) {
                        return elem.Symbol == symbol;
                    });
                    //enter trendline
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
                        });
                    //exit trendline
                    g.selectAll(".trendline")
                        .data([arr])
                        .exit()
                        .remove();

                    g.append("text")
                        .attr("transform", "translate(" + (0 + index * 80) + "," + (height + 110) + ")")
                        .attr("dy", ".35em")
                        .attr("text-anchor", "start")
                        .classed("label " + symbol, true)
                        .style("fill", function (d, i) {
                            return colorScale(index);
                        })
                        .text(symbol)
                        .on("click", function (ele) {
                            var path = d3.select(".company." + symbol + " path");
                            parseInt(path.style("opacity")) ? path.style("opacity", 0) : path.style("opacity", 1);
                        })
                });
            }

            plot.call(chart, {
                data: data,
                axis: {
                    x: xAxis,
                    y: yAxis
                },
                height: height,
                width: width,
                line: line,
                initialize: true
            });

        }
    }

}]);