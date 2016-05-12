# reusableBarChart.js API Reference

This library will give you the ability to make a bar chart with X and Y data in a very straightforward fashion.

## Usage

```javascript

xData={}
yData={}

First, set a data variable to a mapping function of xData and yData. 

When you iterate through xData and yData, make sure to:
	- set each value of x to "xValue" and y to "yValue"
 
To implement graph:

- Create an instance of your bar chart, customize the size, bar color, or titles using the functions provided. 

- Select the container div, bind the data (use datum), then call your instantiation of the barChart() function. You will have a bar graph displayed!

- In order to update your chart, you must reset your chart function by recalling the original instance of the barchart function. Use the functions below to customize your chart.

	- Select the container div, bind the data (datum) to it, then call the instantiation of the barChart() function a second time. 

- The updated chart will appear below your original one because the reusability of this library has not been completely refined. (Note: this is if you have kept the original instance intact, you can always update the chart by changing the original instance so there will not be a chart below it)

- If you edit the parameters for the API functions in the first instance, the same graph will update.
 
- If you want to use new data and make another instance, you must set a data variable to a mapping function and bind the data by using datum when calling the chart again. 

```

## API Functions


\# *barChart*()
> Constructs a bar chart object with the data given

\# *barChart*().**width**(number)
> Sets the current width of the barChart instance to the current value and returns that barChart instance.

\# *barChart*().**height**(number)
> Sets the current height of the barChart instance to the current value and returns that barChart instance.

\# *barChart*().**barColor**(string)
> Sets the current color of the barChart instance to the current string ("rbg(x, x, x)") and returns that barChart instance.

\# *barChart*().**graphTitle**(string)
> Sets the current title of the bar chart to the current string and returns that barChart instance. 

\# *barChart*().**yAxisTitle**(string)
> Sets the current title of the bar charts y axis to the current string and returns that barChart instance. 