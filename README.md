# reusableBarChart.js API Reference

This library will give you the ability to make a bar chart with X and Y data in a very straightforward fashion.

## Usage

```javascript

xData={}
yData={}

xData.map(function(d, i) { to return x and y values in the data sets. 

barChart() is the main function of the graph creation.


```

## API Functions


\# *xData*.**map**(function)

> This is not a new function, but this is responsible for the aggregating the data 

\# *barChart*.()
> Constructs a bar chart object with the data given

\# *barChart*.**width**(number)
> Sets the current width of the barChart instance to the current value and returns that barChart instance.

\# *barChart*.**height**(number)
> Sets the current height of the barChart instance to the current value and returns that barChart instance.

\# *barChart*.**barColor**(string)
> Sets the current color of the barChart instance to the current string ("rbg(x, x, x)") and returns that barChart instance.

\# *barChart*.**graphTitle**(string)
> Sets the current title of the bar chart to the current string and returns that barChart instance. 

\# *barChart*.**yAxisTitle**(string)
> Sets the current title of the bar charts y axis to the current string and returns that barChart instance. 

\# *barChart*.**data**(data)
> Sets the current data of the barChart instance to the data passed in and returns that barChart instance.