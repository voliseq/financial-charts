/**
 * Created by voliseq on 31.01.2017.
 */
stocksApp.service('stockService', function () {

    var v = 800,
        h = 500,
        margin = {
            top: 70,
            bottom: 150,
            left: 80,
            right: 20
        };

    this.o = {
        v: v,
        h: h,
        margin: {
            top: margin.top,
            bottom: margin.bottom,
            left: margin.left,
            right: margin.right
        },
        width: v - margin.left - margin.right,
        height: h - margin.top - margin.bottom,
        dateParser: d3.timeParse("%Y-%m-%d"),
        colorScale: d3.scaleOrdinal(d3.schemeCategory10),
        format: d3.timeFormat("%Y.%m.%d")

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

    this.initCompanies = function(changeCompany, symbols){
        this.selectAll(".company")
            .data(symbols)
            .enter()
            .append("g")
            .attr("class", function (d) {
                return d;
            })
            .classed("company", true)
            .on("click", function (d) {
                changeCompany(d);
            });

        this.selectAll("company")
            .data(symbols)
            .exit()
            .remove();
    };

    this.drawAxes = function (params, header) {
        if (params.initialize) {
            this.append("g")
                .classed("axis x", true)
                .attr("transform", "translate(0," + params.height + ")")
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
                .attr("transform", "translate(" + params.width / 2 + ",80)")
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
                .attr("transform", "translate(-50," + params.height / 2 + ") rotate(-90)")
                .text("Price ($)");
            //chart header
            this.append("g")
                .append("text")
                .classed("chart-header", true)
                .attr("transform", "translate(0,-24)")
                .text("");
            //enter
            this.append("g")
                .classed("legend", true);


        }else {
            //Update info
            this.selectAll("g.x.axis")
                .transition()
                .call(params.axis.x);

            this.selectAll("g.x.axis .tick text")
                .style("text-anchor", "end")
                .attr("dx", -8)
                .attr("dy", 8)
                .attr("transform", "translate(0,0) rotate(-45)");

        }

    }


});