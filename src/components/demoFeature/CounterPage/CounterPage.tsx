import React, { useEffect } from 'react';
import axios from 'axios';
import authAxios from '../../../services/auth/Interceptor';
import CounterContainer from '../../../containers/demoFeature/CounterContainer';

function CounterPage() {
  useEffect(() => {
    console.log(
      'in counterContainer useEffect',
      process.env.REACT_APP_GITHUB_BASE_API_URL,
    );
    authAxios
      .get(`/repos`)
      .then(res => {
        console.log('github response ', res);
      })
      .catch((error: Error) => console.error(error));
  });
  const steps = Number(process.env.REACT_APP_STEPS) || 1;
  return <CounterContainer steps={steps} />;
}

export default CounterPage;
