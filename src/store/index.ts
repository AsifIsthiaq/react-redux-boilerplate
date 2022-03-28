import { combineReducers, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counter, {
  CounterState,
  reducerName as counterReducer,
} from './ducks/counter';

// reducers
/** Initial reducers in the reducer registry */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const defaultReducers: any = {};

/** Add counter reducer to registry */
defaultReducers[counterReducer] = counter;

const rootReducer = combineReducers(defaultReducers);

export type StoreType = Store & CounterState;

/** The initial store */
const store: StoreType = createStore(rootReducer, composeWithDevTools());

export default store;
