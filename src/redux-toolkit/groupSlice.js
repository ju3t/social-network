import { createSlice } from '@reduxjs/toolkit';
import { TypeThunkAction } from './store';
import ApiService from './apiService';

const api = new ApiService();

const initialState = {
  groups: [],
};
const groupsSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    getGroups(state, action) {
      console.log(action);
      state.groups = action.payload;
      // const { id, text } = action.payload;
      // state.push({ id, text, completed: false });
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { getGroups, toggleTodo } = groupsSlice.actions;

export default groupsSlice.reducer;

export function fetchgroups(page, size) {
  return (dispatch) =>
    api.apiGroups(page, size).then((json) => {
      dispatch(getGroups(json));
    });
}
