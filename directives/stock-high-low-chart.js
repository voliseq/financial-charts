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
                    .attr("class", function (d) {
                        return d;
                    });

                this.selectAll("company")
                    .data(symbols)
                    .exit()
                    .remove();


                symbols.forEach(function (symbol, index) {
                    var g = self.selectAll("g." + symbol);
                    var arr = params.data.filter(function (elem) {
                        return elem.Symbol == symbol;
                    });
                    //enter
                    g.selectAll(".point")
                        .data(arr)
                        .enter()
                        .append("circle")
                        .classed("point", true)
                        .attr("r", 4);

                    g.selectAll(".vline")
                        .data(arr)
                        .enter()
                        .append("line")
                        .classed("vline", true)
                        .attr("r", 2);

                    //update
                    g.selectAll(".point")
                        .attr("cx", function (d) {
                            var date = dateParser(d.Date);
                            return x(date);
                        })
                        .attr("cy", function (d) {
                            return y(d.Close);
                        });

                    g.selectAll(".vline")
                        .attr("y1", function(d){
                            y(d.High);
                        })
                        .attr("y2", function(d){
                            y(d.Low);
                        })
                        .attr("x1", 500)
                        .attr("x2", 500);

                    g.selectAll(".line")
                        .style("stroke", "black")
                        .attr("cx1", function (d) {
                            x(dateParser(d.Date))
                        })
                        .attr("cx2", function (d) {
                            x(dateParser(d.Date))
                        })
                        .attr("cy1", function (d) {
                            y(dateParser(+d.High))
                        })
                        .attr("cy2", function (d) {
                            y(dateParser(+d.Low))
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
                            console.log(path);
                            console.log(parseInt(path.style("opacity")), typeof(parseInt(path.style("opacity"))));
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