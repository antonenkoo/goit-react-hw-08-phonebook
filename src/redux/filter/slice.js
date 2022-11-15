import { createSlice } from '@reduxjs/toolkit';
import { setFilter } from './operations';

export const filtersSlice = createSlice({
  name: 'filters',
  initialState: '',
  extraReducers: {
    [setFilter.pending](state) {
      return state;
    },
    [setFilter.fulfilled](state, action) {
      return (state = action.payload);
    },
    [setFilter.rejected](state) {
      return state;
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
