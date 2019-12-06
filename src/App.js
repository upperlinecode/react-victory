import React from 'react';
import Banner from './Components/Banner.js'
import Footer from './Components/Footer.js'
import './App.css';

const App = () => {
  const component = new React.Component();

  component.render = () => {
    return (
      <div className="App">
        <Banner />
        <h1>NYC Demographics Dashboard</h1>
        
        <p>Add visualizations here</p>
        
        <Footer />
      </div>
    );
  }

  return component
}

export default App;
