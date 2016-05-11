var yData = [20,15,30,35,5];
var xData = ['A','B','C','D','E'];
var data = xData.map(function(d,i){return {"yValue":yData[i],"xValue":xData[i]};});
 
var myChart = barChart();
d3.selectAll("#p1")
      .datum(data)
      .call(myChart);


yData = [24,34,22,33,32];
xData = ['A','B','C','D','E'];

data = xData.map(function(d,i){return {"yValue":yData[i],"xValue":xData[i]};});

myChart = barChart().width(400).height(500).yAxisTitle("Cookies").barColor('rgb(0, 255, 0)').data(data).graphTitle("Hello");

d3.select("#p1").datum(data).call(myChart);