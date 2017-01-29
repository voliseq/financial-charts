/**
 * Created by voliseq on 28.01.2017.
 */
var stocksCtrl = stocksApp.controller('stocksCtrl', ['$http', function ($http) {

    var data = rawData.query.results.quote;
    var symbols = [];
    data.map(function (elem) {
        if (symbols.indexOf(elem.Symbol) == -1) {
            symbols.push(elem.Symbol);
        }
    });
    var v = 800;
    var h = 450;
    var margin = {
        top: 58,
        bottom: 100,
        left: 80,
        right: 40
    };

    var width = v - margin.left - margin.right;
    var height = h - margin.top - margin.bottom;

    var svg = d3.select("body").append("svg")
        .attr("id", "chart")
        .attr("width", v)
        .attr("height", h);

    var chart = svg.append("g")
        .classed("display", true)
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var dateParser = d3.timeParse("%Y-%m-%d");
    var colorScale = d3.scaleOrdinal(d3.schemeCategory10);
    var x = d3.scaleTime()
        .domain(d3.extent(data, function (d) {
            return dateParser(d.Date);
        }))
        .range([0, width]);

    var y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d){
            return d.Close;
        })])
        .range([height, 0]);

    var xAxis = d3.axisBottom(x);
    var yAxis = d3.axisLeft(y);

    var line = d3.line()
        .x(function (d) {
            return x(dateParser(d.Date));
        })
        .y(function (d) {
            return y(d.Close)
    });

    //draw line

    //enter company
    chart.selectAll('.company')
        .data(symbols)
        .enter()
        .append("g")
        .attr("class", function(d){
            return d;
        })
        .classed("company", true);

    //update company
    chart.selectAll(".company")
        .style("fill", function(d,i){
            return colorScale(i)
        });

    symbols.forEach(function (symbol) {
        var g = chart.selectAll("g."+symbol);
        var arr = data.filter(function (elem) {
            return elem.Symbol == symbol;
        });

        //enter
        g.selectAll(".trendline")
            .data([arr])
            .enter()
            .append("path")
            .classed("trendline", true);

        g.selectAll(".point")
            .data(arr)
            .enter()
            .append("circle")
            .classed("point", true)
            .attr("r", 2);

        //update
        g.selectAll(".trendline")
            .attr("d", function(d){
                return line(d);
            });
        g.selectAll(".point")
            .attr("cx", function (d) {
                return x(dateParser(d.Date));
            })
            .attr("cy", function (d) {
                return y(d.Close);
            });

        //exit
        g.selectAll(".trendline")
            .data([arr])
            .exit()
            .remove();

        g.selectAll(".point")
            .data(arr)
            .exit()
            .remove();

    });



    // draw axes

    chart.append("g")
        .classed("x axis", true)
        .attr("transform", "translate(0, "+height+")")
        .call(xAxis);

    chart.append("g")
        .classed("y axis", true)
        .attr("transform", "translate(0,0)")
        .call(yAxis);

    //



}]);