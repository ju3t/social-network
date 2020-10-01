import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getChats, getSingleChats } from '../services/chat-controller/testFetch';
import { Ichat, IsingleChat } from '../types/chat';

const loadChatsOfUser = createAsyncThunk('chat/loadChatsOfUser', async () => {
  const response = await getChats();
  return response;
});

const loadCurrentChat = createAsyncThunk('chat/loadCurrentChat', async (id:number) => {
  const response = await getSingleChats(id);
  return response;
});

const initialState = {
  chats: {
    data: null,
    loading: false,
    error: null,
  },
  currentChat: {
    data: null,
    loading: false,
    error: null,
  },
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {},
  extraReducers: {
    // [loadChatsOfUser.pending.type]: (state) => ({ ...state, loading: true }),
    // [loadChatsOfUser.fulfilled.type]: (state, action) => (state),
    // [loadChatsOfUser.rejected.type]: (state, action) => ({
    //   ...state, {
    //     error: action.error,
    //   loading: false,
    //   }
    // }),
  },
});

// export const { } = chatSlice.actions;
// export { };
const chatReducer = chatSlice.reducer;
export default chatReducer;
