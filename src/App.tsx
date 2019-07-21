import React from 'react';
import logo from './logo.svg';
import './App.css';
import Graph from './Componets/Graph';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> GameDash </p>
      </header>
      <div className="my-app">
            <Graph data={[12, 31, 22, 17, 25, 18, 29, 14, 9]}/>
        </div>
    </div>
  );
}

export default App;
