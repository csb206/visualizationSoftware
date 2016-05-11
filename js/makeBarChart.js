function reusableBarChart() {

  var width = 500; // default width    
  var height = 500; // default height
  var barColor = "rgb(250, 50, 50)";
  var x = d3.scale.ordinal()
      .rangeRoundBands([0, width], .1);
  
  var y = d3.scale.linear()
      .range([height, 0]);

  var margin = {top: 20, right: 20, bottom: 35, left: 30};

  var xAxis = d3.svg.axis()
            .scale(x)
            .orient("bottom");

  var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left")
      .ticks(10);

  var svg = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  function my(selection) {
      
      selection.each(function(d, i) {

         x.domain(d.map(function(d) { return d.xValue; }));
         y.domain([0, d3.max(d, function(d) { return d.yValue; })]);
          
        svg.append("g")
          .attr("class", "x axis")
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)
        .selectAll("text")
          .style("text-anchor", "middle");
           
        svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
        .append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 6)
          .attr("dy", ".71em")
          .style("text-anchor", "end")
          .text("Value ($)");
             
         svg.selectAll(".bar")
           .data(d).enter()
           .append("rect")
           .attr("width", 1)
           .attr("class", "bar")
           .attr("x", function(d) { return x(d.xValue); })
           .attr("y", function(d) { return y(d.yValue); })
           .attr("fill", barColor)
           .attr("height", function(d) { return height - y(d.yValue)})
           .transition().duration(1500)
               .attr("width", x.rangeBand()); 
      });
  }

  my.color = function(string) {
    if (!arguments.length) return barColor;
    barColor = string;
    return my;
  }

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

  my.x = function(value) {
    if (!arguments.length) 
      return x;
    x = value;
    return my;
  };

  my.y = function(value) {
    if (!arguments.length) 
      return y;
    y = value;
    return my;
  };

  my.data = function(value) {
    if (!arguments.length) 
      return data;
    data = value;
    return my;
  };

  return my;
}