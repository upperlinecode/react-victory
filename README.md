# Lab: Victory for React

![a couple data visualizations made in this lab]()

## The Goal

In this lab, you'll initialize and use the Victory library in React to make several data visualizations.

## The Setup

1. Clone this repository using `git clone`
2. `cd` into the project folder
3. `npm install`
4. `npm start`

## The Lab

### Part One: Initialize Victory

1. Install the Victory library using `npm install victory`.

### Part Two: Add Data

1. Add a new component called `<Earnings />` to `App.js`, and add a new `.js` file for the component.
2. Initialize the component with the necessary `import` and `export` statements, including for the Victory library.
   1. Check the [Getting Started Guide](https://formidable.com/open-source/victory/docs) if you need help.
3. Add the following data to the `<Earnings />` component. 

```javascript
const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];
```

4. Import the `<VictoryBar />` component and use it in the `<Earnings />`` component.
5. Add accessor props to the `<VictoryBar />` component, including for `data`, `x`, and `y` values.
6. Wrap the `<VictoryBar />` component with a `<VictoryChart />` component to provide axes, and don't forget to `import` VictoryChart, too.
7. Import and add the `<VictoryAxis />` component (x 2!), and set props to add `tickValues` and `tickFormatting`. Add `domainPadding` to the `<VictoryChart />`` component to better arrange the y-axis.
8. Import and add the `<VictoryTheme />` component, and add a `theme` prop to the `<VictoryChart />` component.
9. Import and add the `<VictoryStack />` component, and update your component according to the [Getting Started Guide](https://formidable.com/open-source/victory/docs) to build the stacked bar chart shown above.