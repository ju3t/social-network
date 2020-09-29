import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import groupController from '../services/group-controller';

const loadGroups = createAsyncThunk('groups/loadGroups', async (page: number) => {
  const response = await groupController.apiGroups(page);
  return response;
});

const initialState = {
  groups: [],
  memberOf: [],
  error: null,
  loading: false,
};
const groupsSlice = createSlice({
  name: 'groups',
  initialState,
  reducers: {
    getGroups: (state, action) => ({
      ...state,
      groups: action.payload,
    }),
  },
  extraReducers: {
    [loadGroups.pending.type]: (state) => ({ ...state, loading: true }),
    [loadGroups.fulfilled.type]: (state, action) => ({
      ...state,
      groups: action.payload,
      loading: false,
    }),
    [loadGroups.rejected.type]: (state, action) => ({
      ...state,
      error: action.error,
      loading: false,
    }),
  },
});

export const { getGroups } = groupsSlice.actions;
export { loadGroups };

export const groupsReducer = groupsSlice.reducer;
