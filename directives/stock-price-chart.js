/**
 * Created by voliseq on 30.01.2017.
 */
stocksApp.directive("stockPriceChart", ['$window', '$timeout', function ($window, $timeout) {
    return {
        restrict: "E",
        templateUrl: 'templates/stock-price-chart.html',
        replace: true,
        scope: {
            chartData: "="
        },
        link: function (scope, elem, attrs) {
            var data = scope.chartData.data;
            var v = 960,
                h = 600,
                margin = {
                    top: 20,
                    bottom: 150,
                    left: 40,
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

            var line = d3.line()
                .x(function (d) {
                    return x(dateParser(d.Date));
                })
                .y(function (d) {
                    return y(d.Close);
                });


            function drawAxis(params) {
                console.log(this);
                this.append("g")
                    .classed("axis x", true)
                    .attr("transform", "translate(0," + height + ")")
                    .call(params.axis.x);
                this.append("g")
                    .classed("axis y", true)
                    .attr("transform", "translate(0,0)")
                    .call(params.axis.y);
            }

            function plot(params) {
                drawAxis.call(this, params);
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


                symbols.forEach(function (symbol) {
                    var g = self.selectAll("g." + symbol);
                    var arr = params.data.filter(function (elem) {
                        return elem.Symbol == symbol;
                    });
                    console.log(arr);

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
                        });
                    //exit trendline
                    g.selectAll(".trendline")
                        .data([arr])
                        .exit()
                        .remove();

                })
                this.selectAll(".trendline")
                    .style("stroke", function (d,i) {
                        return colorScale(i);
                    })
            }

            plot.call(chart, {
                data: data,
                axis: {
                    x: xAxis,
                    y: yAxis
                },
                line: line
            })

        }
    }

}]);