import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userController from '../services/user-controller';

const loadUser = createAsyncThunk('user/loadUser', async (id: number) => {
  const response = await userController.getUserById(id);
  return response;
});

const initialState = {
  data: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setData: (state, action) => ({ ...state, data: action.payload, loading: false }),
    setError: (state, action) => ({ ...state, error: action.payload, loading: false }),
    setLoading: (state) => ({ ...state, loading: true }),
  },
  extraReducers: {
    [loadUser.pending.type]: (state) => ({ ...state, loading: true }),
    [loadUser.fulfilled.type]: (state, action) => ({
      ...state,
      data: action.payload,
      loading: false,
    }),
    [loadUser.rejected.type]: (state, action) => ({
      ...state,
      error: action.error,
      loading: false,
    }),
  },
});

export const { setData, setError, setLoading } = userSlice.actions;
export { loadUser };
export const userReducer = userSlice.reducer;
