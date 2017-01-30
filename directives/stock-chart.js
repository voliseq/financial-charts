/**
 * Created by voliseq on 29.01.2017.
 */
stocksApp.directive("stockChart", ['$window', '$timeout', function ($window, $timeout) {
    return {
        restrict: "EA",
        templateUrl: 'templates/stock-charts.html',
        scope: {
            chartData: "="
        },
        link: function ($scope, elem, attrs) {
            var data = $scope.chartData.data;
            var symbols = [];
            data.map(function (elem) {
                if (symbols.indexOf(elem.Symbol) == -1) {
                    symbols.push(elem.Symbol);
                }
            });
            var v = 960;
            var h = 600;
            var margin = {
                    top: 20,
                    bottom: 150,
                    left: 40,
                    right: 20
                },
                margin2 = {
                    top: 520,
                    right: 20,
                    bottom: 30,
                    left: 40
                };
            var width = v - margin.left - margin.right,
                height = h - margin.top - margin.bottom - 300,
                height2 = h - margin2.top - margin2.bottom;

            var svg = d3.select("#chartsRow").append("svg")
                .attr("id", "chart")
                .attr("width", v)
                .attr("height", h);

            var chart = svg.append("g")
                .classed("display", true)
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

            var chart2 = svg.append("g")
                .classed("display", true)
                .attr("transform", "translate(" + margin.left + "," + 200 + ")");


            var context = svg.append("g")
                .classed("context", true)
                .attr("transform", "translate(" + margin2.left + "," + margin2.top + ")");

            svg.append("defs").append("clipPath")
                .attr("id", "clip")
                .append("rect")
                .attr("width", width)
                .attr("height", height);

            var dateParser = d3.timeParse("%Y-%m-%d");
            var colorScale = d3.scaleOrdinal(d3.schemeCategory10);
            var x = d3.scaleTime()
                .domain(d3.extent(data, function (d) {
                    return dateParser(d.Date);
                }))
                .range([0, width]);
            var x2 = d3.scaleTime()
                .domain(d3.extent(data, function (d) {
                    return dateParser(d.Date);
                }))
                .range([0, width]);
            var y = d3.scaleLinear()
                .domain([0, d3.max(data, function (d) {
                    return d.Close;
                })])
                .range([height, 0]);
            var y2 = d3.scaleLinear()
                .domain([0, d3.max(data, function (d) {
                    return d.Close;
                })])
                .range([height2, 0]);
            var xAxis = d3.axisBottom(x);
            var xAxis2 = d3.axisBottom(x2);
            var yAxis = d3.axisLeft(y);
            var line = d3.line()
                .x(function (d) {
                    return x(dateParser(d.Date));
                })
                .y(function (d) {
                    return y(d.Close)
                });
            var line2 = d3.line()
                .x(function (d) {
                    return x2(dateParser(d.Date));
                })
                .y(function (d) {
                    return y2(d.Close)
                });
            var brush = d3.brushX()
                .extent([[0, 0], [width, height2]])
                .on("brush end", brushed);

            function brushed() {
                if (d3.event.sourceEvent && d3.event.sourceEvent.type === "zoom") return; // ignore brush-by-zoom
                var s = d3.event.selection || x2.range();
                x.domain(s.map(x2.invert, x2));
                chart.select(".x.axis").call(xAxis);
                svg.select(".zoom").call(zoom.transform, d3.zoomIdentity
                    .scale(width / (s[1] - s[0]))
                    .translate(-s[0], 0));
                plot();
            }

            var zoom = d3.zoom()
                .scaleExtent([1, Infinity])
                .translateExtent([[0, 0], [width, height]])
                .extent([[0, 0], [width, height]])
                .on("zoom", zoomed);

            function zoomed() {
                if (d3.event.sourceEvent && d3.event.sourceEvent.type === "brush") return; // ignore zoom-by-brush
                var t = d3.event.transform;
                x.domain(t.rescaleX(x2).domain());
                var paths = chart.selectAll("path")._groups[0];
                chart.select(".x.axis").call(xAxis);
                context.select(".brush").call(brush.move, x.range().map(t.invertX, t));
                plot();
            }
            function drawCompanies(params){
                symbols.forEach(function (symbol) {
                    var g = params.element.selectAll("g." + symbol);
                    var arr = data.filter(function (elem) {
                        return elem.Symbol == symbol;
                    });
                    //enter
                    g.selectAll(".trendline")
                        .data([arr])
                        .enter()
                        .append("path")
                        .classed("trendline", true);
                    //update
                    g.selectAll(".trendline")
                        .attr("d", function (d) {
                            return params.line(d);
                        });
                    //exit
                    g.selectAll(".trendline")
                        .data([arr])
                        .exit()
                        .remove();
                });
            };
            function drawAxes() {
                chart.append("g")
                    .classed("x axis", true)
                    .attr("transform", "translate(0, " + height + ")")
                    .call(xAxis);

                chart.append("g")
                    .classed("y axis", true)
                    .attr("transform", "translate(0,0)")
                    .call(yAxis);

                context.append("g")
                    .classed("x axis", true)
                    .attr("transform", "translate(0, " + height2 + ")")
                    .call(xAxis2);
            }

            drawAxes();
            //draw plot
            var plot = function () {
                //enter company
                chart.selectAll('.company')
                    .data(symbols)
                    .enter()
                    .append("g")
                    .attr("class", function (d) {
                        return d;
                    })
                    .classed("company", true);

                context.selectAll('.company')
                    .data(symbols)
                    .enter()
                    .append("g")
                    .attr("class", function (d) {
                        return d;
                    })
                    .classed("company", true);
                //update company
                context.selectAll(".trendline")
                    .style("stroke", function (d, i) {
                        return colorScale(i)
                    });
                chart.selectAll(".trendline")
                    .style("stroke", function (d, i) {
                        return colorScale(i)
                    });
                drawCompanies({element: chart, line: line});
                drawCompanies({element: context, line: line2});
            };
            plot();
            // brush
            context.append("g")
                .attr("class", "brush")
                .call(brush)
                .call(brush.move, x.range());

            svg.append("rect")
                .attr("class", "zoom")
                .attr("width", width)
                .attr("height", height)
                .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
                .call(zoom);
        }
    }

}]);