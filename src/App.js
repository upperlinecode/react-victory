import React from 'react';
import Banner from './Components/Banner.js'
import Footer from './Components/Footer.js'
import Population from './Components/Population.js'
import PopulationByBorough from './Components/PopulationByBorough.js'
import PopulationByBoroughAlt from './Components/PopulationByBoroughAlt.js'
import AnnualPopulations from './Components/AnnualPopulations.js'
import './App.css';

const App = () => {
  const component = new React.Component();

  component.render = () => {
    return (
      <div className="App">
        <Banner />
        <h1>NYC Demographics Dashboard</h1>
        
        <Population />
        <PopulationByBorough />
        <PopulationByBoroughAlt />
        <AnnualPopulations />
        
        <Footer />
      </div>
    );
  }

  return component
}

export default App;
