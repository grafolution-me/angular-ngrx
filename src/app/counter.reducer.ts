import { createReducer, on } from '@ngrx/store';
import  * as MyCounter  from './counter.action';
export const initialState = 0;
 
const _counterReducer = createReducer(initialState,
  on(MyCounter.increment, state => state + 1),
  on(MyCounter.decrement, state => state - 1),
  on(MyCounter.reset, state => 0),
);

export function counterReducer(state, action) {
  return _counterReducer(state, action);
}