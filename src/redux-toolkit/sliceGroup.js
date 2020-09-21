import { createSlice } from '@reduxjs/toolkit';

const groupsSlice = createSlice({
  name: 'todos',
  initialState: {
    groups: [],
  },
  reducers: {
    getGroups(state, action) {
      state.groups.push('qwe');
      //const { id, text } = action.payload;
      //state.push({ id, text, completed: false });
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
