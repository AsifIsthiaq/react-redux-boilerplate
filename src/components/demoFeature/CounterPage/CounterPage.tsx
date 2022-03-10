import React from 'react';
import CounterContainer from '../../../containers/demoFeature/CounterContainer';

function CounterPage() {
  const step = Number(process.env.REACT_APP_STEP) || 1;
  return <CounterContainer step={step} />;
}

export default CounterPage;
