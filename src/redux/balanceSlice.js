import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'balance',
  initialState: { value: 0 },
  reducers: {
    deposit(state, action) {
      state.value += action.payload;
    },
    withdraw(state, action) {
      state.value -= action.payload;
    },
  },
});

export const { deposit, withdraw } = slice.actions;

export const selectBalance = state => state.balance.value;

export default slice.reducer;

// chaining pattern
// const builder = {
//   a() {
//     console.log('a');
//     return this;
//   },
//   b() {
//     console.log('b');
//     return this;
//   },
// };

// builder.a().b().a().b().a().b().b();
