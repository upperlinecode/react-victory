import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryStack } from 'victory';
import { bronx, brooklyn, manhattan, queens, statenisland } from '../Data/PopulationByBorough.js'

const PopulationByBorough = () => {
  return (
    <div className="visCard">
      <h4>NYC Population by Borough</h4>
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
          <VictoryBar
            data={bronx}
            x="year"
            y="population"
          />
          <VictoryBar
            data={brooklyn}
            x="year"
            y="population"
          />
          <VictoryBar
            data={manhattan}
            x="year"
            y="population"
          />
          <VictoryBar
            data={queens}
            x="year"
            y="population"
          />
          <VictoryBar
            data={statenisland}
            x="year"
            y="population"
          />
        </VictoryStack>
      </VictoryChart>
    </div>
  )
}

export default PopulationByBorough;
