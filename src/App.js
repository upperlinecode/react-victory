import React from 'react';
import './App.css';

const App = () => {
  const component = new React.Component();

  component.render = () => {
    return (
      <div className="App">
        <h1>NYC Demographics Dashboard</h1>
      </div>
    );
  }

  return component
}

export default App;
