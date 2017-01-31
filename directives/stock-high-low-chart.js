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
            var data = scope.chartData.data;
            var o = stockService.o;

            function changeCompany(d){
                scope.$apply(function () {
                    scope.stockData = stockService.changeCompany(data, d);
                })
            }

            var svg = d3.select(elem[0]).append("svg")
                .attr("id", "priceTime")
                .attr("width", o.v)
                .attr("height", o.h);

            var chart = svg.append("g")
                .classed("display", true)
                .attr("transform", "translate(" + o.margin.left + "," + o.margin.top + ")");

            var x = d3.scaleTime()
                .domain(d3.extent(data, function (d) {
                    return o.dateParser(d.Date);
                }))
                .range([0, o.width]),
                y = d3.scaleLinear()
                    .domain([0, d3.max(data, function (d) {
                        return d.Close;
                    })])
                    .range([o.height, 0]);
            var xAxis = d3.axisBottom(x),
                yAxis = d3.axisLeft(y);


            function plot(params) {
                var self = this;
                stockService.drawAxes.call(this, params, 1);

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
                    .classed("company", true)
                    .on("click", function(d){
                        changeCompany(d);
                    });

                this.selectAll("company")
                    .data(symbols)
                    .exit()
                    .remove();

                var arr = [];
                symbols.forEach(function (symbol, index) {
                    var g = self.selectAll("g." + symbol);
                    arr[index] = params.data.filter(function (elem) {
                        return elem.Symbol == symbol;
                    });
                    console.log(arr[index]);
                    //enter
                    g.selectAll(".point")
                        .data(arr[index])
                        .enter()
                        .append("circle")
                        .classed("point", true)
                        .attr("r", 4);

                    //update
                    g.selectAll(".point")
                        .attr("cx", function (d) {
                            var date = o.dateParser(d.Date);
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
                            str += ", Date: " + info.Date;
                            d3.select(".chart-header").text(str);
                        })
                        .on("mouseout", function (d, i) {
                            d3.select(this)
                                .transition()
                                .attr("r", 4);
                            d3.select(".chart-header").text("");
                        });

                    //exit
                    g.selectAll(".point")
                        .style("fill", function (d, i) {
                            return o.colorScale(index);
                        });

                    g.selectAll(".point")
                        .data(params.data)
                        .exit()
                        .remove();


                    g.append("text")
                        .attr("transform", "translate(" + (0 + index * 80) + "," + (o.height + 110) + ")")
                        .attr("dy", ".35em")
                        .attr("text-anchor", "start")
                        .classed("label " + symbol, true)
                        .style("fill", function (d, i) {
                            return o.colorScale(index);
                        })
                        .text(symbol)
                        .on("click", function () {
                            console.log("elo");
                            var path = d3.selectAll("g." + symbol + " .point");
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
                height: o.height,
                width: o.width,
                initialize: true
            });

        }
    }

}]);