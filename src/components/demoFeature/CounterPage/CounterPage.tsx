import React from 'react';
import CounterContainer from '../../../containers/demoFeature/CounterContainer';

function CounterPage() {
  const steps = Number(process.env.REACT_APP_STEPS) || 1;
  return <CounterContainer steps={steps} />;
}

export default CounterPage;
