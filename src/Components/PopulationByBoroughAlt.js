import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';
import population from '../Data/HistoricalPopulation.js'

let boroughs = population.map((value, index) => {
  return <VictoryBar
    data={value.data}
    x="year"
    y="population"
  />
})

const PopulationByBoroughAlt = () => {
  return (
    <div className="visCard">
      <h4>NYC Population by Borough (Alt)</h4>
      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={10}
      >
        <VictoryAxis
          tickValues={[1960, 1980, 2000, 2020, 2040]}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`${x/1000000}M`)}
        />
        <VictoryStack colorScale={"qualitative"}>
          {boroughs}
        </VictoryStack>
      </VictoryChart>
    </div>
  )
}

export default PopulationByBoroughAlt;
