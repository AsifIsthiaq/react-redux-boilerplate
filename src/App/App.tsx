import React from 'react';
import CounterContainer from '../containers/demoFeature/CounterContainer';
// import logo from '../logo.svg';
import './App.scss';

function App() {
  console.log(process.env.NODE_ENV.trim().toLowerCase());
  console.log(`ENV: ${process.env.REACT_APP_ENV}`);
  return (
    <div className="App">
      <CounterContainer step={6} />
    </div>
  );
}

export default App;
