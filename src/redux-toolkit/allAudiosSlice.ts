import { createAsyncThunk, createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { fetchAudiosAll } from '../services/allFetch';

interface Iarticles {
  articles: Array<{
    author: any, body: string, createdAt: string, description: string,
    favorited: boolean, favoritesCount: number, slug: string, tagList: string[], title: string,
    updatedAt: string
  }>
  articlesCount: number
}

interface Interface {

}

// Типа action, который потом диспатчится
export const allAudiosAction = createAsyncThunk(
  'auidos/allAudiosAction', async (data, argThunkAPI) => {
    try {
      const response = await fetchAudiosAll();
      console.log('response success', response);
      return response.data;
    } catch (err) {
      console.log('err', err);
      console.log('response err', err.response.data);
      // Обарачиваем err.response.data чтобы в slice возвращало как тип rejected
      return argThunkAPI.rejectWithValue(err.response.data);
    }
  },
);

const allAudiosSlice = createSlice({
  name: 'allAudiosSlice',
  initialState: { allAudios: [], loading: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(allAudiosAction.pending,
      (state, action: PayloadAction<any>) => {
        console.log('state extraReducers pending', state);
        console.log('action extraReducers pending', action);
      });
    builder.addCase(allAudiosAction.fulfilled,
      (state: Draft<{ allAudios: Array<any>, loading: string }>, action: PayloadAction<any>) => {
        console.log('state extraReducers fulfilled', state);
        console.log('action extraReducers fulfilled', action);
        console.log('action extraReducers fulfilled endswidth', action.type.endsWith('fulfilled'));
        state.allAudios.push(...action.payload);
        state.loading = 'fulfilled';
      });
    builder.addCase(allAudiosAction.rejected,
      (state: Draft<any>, action: PayloadAction<any>) => {
        console.log('state extraReducers rejected', state);
        console.log('action extraReducers rejected', action);
      });
  },
});

export const allAudiosSliceSelector = (state: any) => state.allAudiosSlice;

export default allAudiosSlice.reducer;
