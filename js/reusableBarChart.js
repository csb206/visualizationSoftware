// Created a function barChart that is my reusable function
function barChart() {

  var width = 500; // default width    
  var height = 500; // default height
  var barColor = "rgb(250, 50, 50)"; // default bar color
  var yAxisTitle = "Y-Value"; //default y axis title
  var graphTitle = "Title"; // default bar chart

  // the xscale of the graph
  var x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1);
  
  // the yscale of the graph 
  var y = d3.scale.linear()
      .range([height, 0]);

  // margin of the graph
  var margin = {top: 20, right: 20, bottom: 35, left: 30};

  // x axis labels
  var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

  // y axis tick labels
  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .ticks(10);

  // Select 'body' as the element in which you want to render your chart
  var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // chart function will be returned by the barChart function.
  // given parameter represents your selection
  function my(selection) {
      // Loop through selections using the .each method
      selection.each(function(d, i) {

         x.domain(d.map(function(d) { return d.xValue; }));
         y.domain([0, d3.max(d, function(d) { return d.yValue; })]);
          
        // append a g element as the x axis in the svg (graph)
        svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)
        .selectAll("text")
          .style("text-anchor", "middle")
          .append("text")
            .attr("text-anchor", "end")  
            .attr("dx", "-.8em")
            .attr("dy", "-.55em");
        // append a g elemnt as the y axis in the svg (graph)  
        svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text(yAxisTitle);
        // append the graph title text in the svg
        svg.append("text")
          .attr("x", (width / 2))             
          .attr("y", 2 - (margin.top / 2))
          .attr("text-anchor", "middle")  
          .style("font-size", "14px") 
          .style("text-decoration", "underline")  
          .text(graphTitle);
        // select all bars and bind the data    
        var bars = svg.selectAll(".bar").data(d);
        // append the rectangles to show the bars
        bars.enter().append("rect")
           .attr("class", "bar");
        // remove the bars that arent in the data. (it should let me know what went wrong here?!)
        bars.exit().remove();
        // set the bars attributs here with their x and y coordinates, color, size and transitions
        bars.attr("x", function(d) { return x(d.xValue); })
           .attr("y", function(d) { return y(d.yValue); })
           .attr("fill", barColor)
           .attr("width", 1)
           .attr("height", function(d) { return height - y(d.yValue)})
           .transition().duration(1500)
               .attr("width", x.rangeBand()); 
      });
  }

  // function that takes in a rbg string to reset the bar color of the original bar to the given string
  my.barColor = function(string) {
    if (!arguments.length) return barColor;
    barColor = string;
    return my;
  }

  // function that takes in a string for the y axis title to reset the name of it to the given string
  my.yAxisTitle = function(string) {
    if (!arguments.length) return yAxisTitle;
    yAxisTitle = string;
    return my;
  }

  // function that takes in a string for the graph title to reset the name of it to the given string
  my.graphTitle = function(string) {
    if (!arguments.length) return graphTitle;
    graphTitle = string;
    return my;
  }

  // function that takes in a number value to reset the width of the graph to the given value
  my.width = function(value) {
    if (!arguments.length) return width;
    width = value;
    x = d3.scale.ordinal() 
        .rangeRoundBands([0, width], .1);
    xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");
    return my;
  };

  // function that takes in a number value to reset the height of the graph to the given value
  my.height = function(value) {
    if (!arguments.length) return height;
    height = value;
    y = d3.scale.linear()
        .range([height, 0]);  
    yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .tickSize(10);
    return my;
  };
  return my;
}