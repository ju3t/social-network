import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const asyncAllAudios = createAsyncThunk()


const allAudiosSlice = createSlice({
  name: 'allAudiosSlice',
  initialState: [],
  extraReducers: builder => {
    builder.addCase()
  }
})
