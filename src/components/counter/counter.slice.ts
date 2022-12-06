import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  count: number
}

const initailState: CounterState = {
  count: 0,
}

export const counterSlice = createSlice({
  initialState: initailState,
  name: 'counter',
  reducers: {
    decrement: (state) => {
      state.count -= 1
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.count -= action.payload
    },
    increment: (state) => {
      state.count += 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload
    },
    reset: (state) => {
      state.count = 0
    },
  },
})

// After action creators are generated for each reducer methods/functions
export const {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
  reset,
} = counterSlice.actions

export default counterSlice.reducer
