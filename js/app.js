
var yData = [20,60,30,1,5];
var xData = ['A','B','C','D','E'];
var data = xData.map(function(d,i){return {"yValue":yData[i],"xValue":xData[i]};});
 
var myChart = reusableBarChart();
d3.selectAll("#p1")
      .datum(data)
      .call(myChart);




yData = [24,2,35,10,32];
xData = ['A','B','C','D','E'];
data = xData.map(function(d,i){return {"yValue":yData[i],"xValue":xData[i]};});

myChart = reusableBarChart().width(400).height(500).color('rgb(0, 255, 0)').data(data);

d3.select("#p1").datum(data).call(myChart);