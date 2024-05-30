import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'locale',
  initialState: { lang: 'uk', value: 'hello' },
  reducers: {
    // changeLang(state, action) {
    //   state.lang = action.payload;
    // },
    changeLang: {
      reducer(state, action) {
        state.lang = action.payload.lang;
      },
      prepare(value) {
        return {
          payload: {
            id: crypto.randomUUID(),
            lang: value,
          },
        };
      },
    },
  },
});

export const { changeLang } = slice.actions;

export const selectLang = state => state.locale.lang;

export default slice.reducer;
