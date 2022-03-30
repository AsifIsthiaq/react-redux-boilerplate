import { AnyAction, Store } from 'redux';
import SeamlessImmutable from 'seamless-immutable';

/** interface for flexible object */
export interface FlexObj {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

/** The reducer name */
export const reducerName = 'counter';

// actions
/** action types */
export const SET_COUNTER = 'reactboilerplate/reducer/counter/SET_COUNTER';
export const RESET_COUNTER = 'reactboilerplate/reducer/counter/RESET_COUNT';

/** interface for SET_COUNTER action */
export interface SetCounterAction extends AnyAction {
  count: number;
  type: typeof SET_COUNTER;
}

/** interface for RESET_COUNTER action */
export interface ResetCounterAction extends AnyAction {
  type: typeof RESET_COUNTER;
}

/** Create type for counter reducer actions */
export type ListTableActionTypes = SetCounterAction | ResetCounterAction;
//  | AnyAction;

// action creators

/** set counter action creator
 * @param {number} count - count to be set
 * @returns {SetCounterAction} - an action to set count in store
 */
export const setCounter = (count: number): SetCounterAction => ({
  count,
  type: SET_COUNTER,
});

/** reset counter action creator
 * @returns {ResetCounterAction} - an action to reset counter in store
 */
export const resetCounter = (): ResetCounterAction => ({
  type: RESET_COUNTER,
});

// the reducer

/** interface for counter state in redux store */
export interface CounterState {
  count: number;
}

/** Create an immutable counter state */
export type ImmutableListTableState =
  SeamlessImmutable.ImmutableObject<CounterState>;

/** initial session state */
const initialState: ImmutableListTableState = SeamlessImmutable({
  count: 0,
});

/** the counter reducer function */
export default function reducer(
  state: ImmutableListTableState = initialState,
  action: ListTableActionTypes,
): ImmutableListTableState {
  switch (action.type) {
    case SET_COUNTER:
      // return SeamlessImmutable({
      //   ...state.asMutable({ deep: true }),
      //   count: action.count,
      // });
      return action.count <= 20
        ? SeamlessImmutable({
            ...state.asMutable({ deep: true }),
            count: action.count,
          })
        : state;
    // return { ...state, count: action.count };
    case RESET_COUNTER:
      return initialState;
    default:
      return state;
  }
}

// selectors

/** returns the count
 * @param {Partial<Store>} state - the redux store
 * @return { number } - the existing count
 */
export function getCount(state: Partial<Store>): number {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (state as any)[reducerName].count;
}
