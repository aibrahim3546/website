import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  amount: number;
}

const initialState: CounterState = {
  amount: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    updateCounterAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
  },
});

export const { updateCounterAmount } = counterSlice.actions;
export default counterSlice.reducer;
