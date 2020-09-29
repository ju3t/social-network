import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserById } from '../services/user-controller';
import { IUser } from './../types/user';

const loadUser = createAsyncThunk('user/loadUser', async (id: number) => {
  const response = await getUserById(id);
  return response;
});

const initialState = {
  data: null,
  loading: false,
  error: null,
};

type IUserState = {
  data: IUser | null,
  loading: boolean,
  error: Error | null
} | void

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setData: (state, action) => ({ ...state, data: action.payload, loading: false }),
    setError: (state, action) => ({ ...state, error: action.payload, loading: false }),
    setLoading: (state) => ({ ...state, loading: true }),
    updateStatus: (state, action) => {
      const newUser = Object.assign( {}, state.data, { status: action.payload });
      return { ...state, data: newUser };
    }
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

export const { setData, setError, setLoading, updateStatus } = userSlice.actions;
export { loadUser };
export const userReducer = userSlice.reducer;
