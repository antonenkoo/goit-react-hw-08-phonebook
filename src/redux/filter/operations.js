import { createAsyncThunk } from '@reduxjs/toolkit';

export const setFilter = createAsyncThunk(
  'filter/setFilter',
  async (value, thunkAPI) => {
    try {
      return value;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
