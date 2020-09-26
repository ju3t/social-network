import { createAsyncThunk, createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';
import { fetchAudiosAll, fetchMyPartAudios } from '../../services/allFetch';
import axios from 'axios';
import IfriendData from '../../typesInterfaces/IfriendData';
import errFetchHandler from '../../helperFunctions/errFetchHandler';
import { TypeRootReducer } from '../rootReducer';

// Типа action, который потом диспатчится
export const allAudiosAction = createAsyncThunk(
  'audios/allAudiosAction',
  async (data, argThunkAPI) => {
    try {
      const response = await fetchAudiosAll();
      console.log('response success', response);
      return response.data;
    } catch (err) {
      return errFetchHandler(err, argThunkAPI);
    }
  },
);

export const myAudiosAction = createAsyncThunk(
  'fetch/myAudiosAction',
  async (data, argThunkAPI) => {
    try {
      const response: any = await fetchMyPartAudios();
      console.log('response MYaudios action', response);
      return response.data;
    } catch (err) {
      console.log('err myAudiosAction', err.message);
      console.log('err.response', err.response);
      return errFetchHandler(err, argThunkAPI);
    }
  },
);

export const friendsAudioAction = createAsyncThunk(
  'fetch/friendsAudioAction',
  async (data, argThunkAPI) => {
    try {
      const arrFriendsIds = await axios.get('http://91.241.64.178:5561/api/user/getFriends/1');
      console.log('arrFriendsIds', arrFriendsIds);
      const arrPromiseFriendsData: Array<Promise<IfriendData>> = arrFriendsIds.data
        .map(async ({ friendId }: { friendId: number }) => {
          try {
            const friendData = await axios.get(`http://91.241.64.178:5561/api/user/${friendId}`);
            return friendData.data;
          } catch (e) {
            return e.response;
          }
        });
      console.log('arrPromiseFriendsData', arrPromiseFriendsData);
      const arrFriendsData: Array<IfriendData> = await Promise.all(arrPromiseFriendsData);
      console.log('arrFriendsData', arrFriendsData);
      return arrFriendsData;
    } catch (err) {
      console.log('err friendsAudioAction', err);
      return errFetchHandler(err, argThunkAPI);
    }
  },
);


const allAudiosSlice = createSlice({
  name: 'allAudiosSlice',
  initialState: { allAudios: [], friends: [], loading: '', msgFetchState: '' },
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
        state.allAudios = action.payload;
        state.loading = action.type;
      });
    builder.addCase(allAudiosAction.rejected,
      (state: Draft<any>, action: PayloadAction<any>) => {
        console.log('state extraReducers rejected', state);
        console.log('action extraReducers rejected', action);
        state.loading = action.type;
        state.msgFetchState = action.payload;
      });
    builder.addCase(myAudiosAction.pending, (state: Draft<any>, action: PayloadAction<any>) => {
      console.log('pending');
      state.loading = action.type;
      state.msgFetchState = action.payload;
    });
    builder.addCase(myAudiosAction.fulfilled, (state: Draft<any>, action: PayloadAction<any>) => {
      console.log('state myAudiosAction', state);
      console.log('action myAudiosAction', action);
      console.log('fulfilled');
      state.allAudios = action.payload;
    });
    builder.addCase(myAudiosAction.rejected, (state: Draft<any>, action: PayloadAction<any>) => {
      console.log('action myAudiosAction.rejected', action);
      console.log('reject');
      state.loading = action.type;
      state.msgFetchState = action.payload;
    });
    builder.addCase(friendsAudioAction.pending, (state, action) => {
      console.log('pending');
    });
    builder.addCase(friendsAudioAction.fulfilled, (state: Draft<any>, action: PayloadAction<any>) => {
      console.log('state friendsAudioAction', state);
      console.log('action friendsAudioAction', action);
      state.friends = action.payload;
    });
    builder.addCase(friendsAudioAction.rejected, (state: Draft<any>, action: PayloadAction<any>) => {
      console.log('action friendsAudioAction', action);
      state.loading = action.type;
      state.msgFetchState = action.payload;
    });
  },
});

export const allAudiosSliceSelector = (state: TypeRootReducer) => state.allAudiosReducer;

const allAudiosReducer = allAudiosSlice.reducer;
export default allAudiosReducer;
