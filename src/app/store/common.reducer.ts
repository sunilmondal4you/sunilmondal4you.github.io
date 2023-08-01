import { createReducer } from "@ngrx/store";

export interface BookItem {
  pageCount: number,
  booksName : string
}

export const initialState:BookItem = {
  pageCount: 100,
  booksName : "Harry Porter"
}

export const bookReducer = createReducer(
  initialState
)
