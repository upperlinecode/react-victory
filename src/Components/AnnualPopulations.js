import React from 'react';
import { VictoryPie, VictoryTheme } from 'victory';
import population from '../Data/HistoricalPopulationByYear.js'

// Note: this can, of course, also be done passing props to another Component
let years = population.map((value, index) => {
  return <div className="visCard">
    <h4>NYC Population by Borough ({value.year})</h4>
    <VictoryPie
      data={value.data}
      x="borough"
      y="population"
      innerRadius={80}
      padAngle={1}
      theme={VictoryTheme.material}
      colorScale={"qualitative"}
      domainPadding={10}
      labelRadius={({ innerRadius }) => innerRadius + 55 }
    />
  </div>
})

const AnnualPopulations = () => {
  return (
    <div className="container">
      {years}
    </div>
  )
}

export default AnnualPopulations;
