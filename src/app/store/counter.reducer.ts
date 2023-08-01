import { createAction, createReducer, on } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');

export const initialState = 10;

export const counterReducer = createReducer(
  initialState,

  on(increment, (state) => {
    return state + 1
  }),
  on(decrement, (state) => {
    return state - 1
  }),
);
