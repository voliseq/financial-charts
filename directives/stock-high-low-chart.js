/**
 * Created by voliseq on 30.01.2017.
 */
stocksApp.directive("stockHighLowChart", ['$window', '$timeout', function ($window, $timeout) {
    return {
        restrict: "E",
        templateUrl: 'templates/stock-price-chart.html',
        replace: true,
        scope: {
            chartData: "="
        },
        link: function (scope, elem, attrs) {
            var data = scope.chartData.data;
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
                        return dateParser(d.Date);
                    }))
                    .range([0, width]),
                y = d3.scaleLinear()
                    .domain([0, d3.max(data, function (d) {
                        return d.Close;
                    })])
                    .range([height, 0]);
            var xAxis = d3.axisBottom(x),
                yAxis = d3.axisLeft(y);

            function drawAxis(params) {
                this.append("g")
                    .classed("axis x", true)
                    .attr("transform", "translate(0," + height + ")")
                    .call(params.axis.x)
                    .selectAll("text")
                    .classed("x-axis-label", true)
                    .style("text-anchor", "end")
                    .attr("dx", -8)
                    .attr("dy", 8)
                    .attr("transform", "translate(0,0) rotate(-45)");
                //This is the x label
                this.select(".x.axis")
                    .append("text")
                    .attr("x", 0)
                    .attr("y", 0)
                    .style("text-anchor", "middle")
                    .attr("transform", "translate(" + width / 2 + ",80)")
                    .text("Time");

                this.append("g")
                    .classed("axis y", true)
                    .attr("transform", "translate(0,0)")
                    .call(params.axis.y);
                //This is the y label
                this.select(".y.axis")
                    .append("text")
                    .attr("x", 0)
                    .attr("y", 0)
                    .style("text-anchor", "middle")
                    .attr("transform", "translate(-50," + height / 2 + ") rotate(-90)")
                    .text("Price ($)");
                //chart header
                this.append("g")
                    .append("text")
                    .classed("chart-header", true)
                    .attr("transform", "translate(0,-24)")
                    .text("");
            }

            function plot(params) {
                var self = this;
                drawAxis.call(this, params);

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
                            var date = dateParser(d.Date);
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
                            str += " High: " + info.High;
                            str += " Low: " + info.Low;
                            str += " Date: " + info.Date;
                            d3.select(".chart-header").text(str);
                        })
                        .on("mouseout", function (d, i) {
                            d3.select(this)
                                .transition()
                                .attr("r", 5);
                            d3.select(".chart-header").text("");
                        });

                    //exit
                    g.selectAll(".point")
                        .style("fill", function (d, i) {
                            return colorScale(index);
                        });

                    g.selectAll(".point")
                        .data(params.data)
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
                initialize: true
            });

        }
    }

}]);