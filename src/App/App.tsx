import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './App.scss';
import {
  LOCAL_DEMO_HOME_ENDPOINT,
  LOCAL_DEMO_COUNTER_ENDPOINT,
  LOCAL_ERROR_ENDPOINT,
} from '../configs/endpoints';

// import {HomePage,CounterPage} from '../components/demoFeature'
const HomePage = lazy(() => import('../components/demoFeature/HomePage'));
const CounterPage = lazy(() => import('../components/demoFeature/CounterPage'));

function App() {
  console.log(process.env.NODE_ENV.trim().toLowerCase());
  console.log(`ENV: ${process.env.REACT_APP_ENV}`);
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={LOCAL_DEMO_HOME_ENDPOINT} element={<HomePage />} />
            <Route
              path={LOCAL_DEMO_COUNTER_ENDPOINT}
              element={<CounterPage />}
            />
            <Route
              path={LOCAL_ERROR_ENDPOINT}
              element={<div>Error Occurred</div>}
            />
            <Route path="*" element={<Navigate to={LOCAL_ERROR_ENDPOINT} />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
