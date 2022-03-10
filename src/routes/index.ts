import { lazy } from 'react';
// import { HomePage, CounterPage } from '../components/demoFeature';
import {
  LOCAL_DEMO_HOME_ENDPOINT,
  LOCAL_DEMO_COUNTER_ENDPOINT,
} from '../configs/endpoints';

const HomePage = lazy(() => import('../components/demoFeature/HomePage'));
const CounterPage = lazy(() => import('../components/demoFeature/CounterPage'));

const routes = [
  {
    path: LOCAL_DEMO_HOME_ENDPOINT,
    component: HomePage,
    exact: true,
  },
  {
    path: LOCAL_DEMO_COUNTER_ENDPOINT,
    component: CounterPage,
    exact: true,
  },
];

export default routes;
