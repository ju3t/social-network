import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { cloneDeep } from 'lodash';
import { getUserById, updateUser } from '../services/user-controller';
import { IUser } from '../types/user';
import { PostsState } from './postsSlice';
import { StateChat } from './chatSlice';

const loadUser = createAsyncThunk('user/loadUser', async (id: number) => {
  const response = await getUserById(id);
  return response;
});

interface UserState {
  data: null | IUser,
  loading: boolean,
  error: null | Error,
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

/*
Нужен, чтобы обращаться в createAsyncThunk к thunkApi.
Так как импортировать уже существующий тип стора не выйдет - создание стора зависит от
этого файла, - то приходится делать слепок ещё несуществующего стора.
Если через thunkApi надо будет обратиться куда-то в пределах данного файла -
модифицируете модель ниже.
*/
type CloneRootState = {
  user: UserState;
  posts: PostsState;
  allAudiosReducer: {
    allAudios: never[];
    friends: never[];
    loading: string;
    msgFetchState: string;
  };
  chat: StateChat;
};

const updateStatus = createAsyncThunk<AxiosResponse<IUser>, string, {state:CloneRootState }>('user/updateStatus', async (status: string, thunkApi) => {
  const { user } = thunkApi.getState();
  const newUser = { ...user.data, status, roleName: undefined, activeName: 'Active' } as IUser;
  const response = await updateUser(newUser);
  return response;
});

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
    [updateStatus.pending.type]: (state) => ({ ...state, loading: true }),
    [updateStatus.fulfilled.type]: (state, action) => {
      if (state?.data) {
        return state;
      }
      /*
      Пробовал заставить prettier и eslint игнорировать строчки ниже,
      прописывать изменение через Object.assign, но линтеры просто переправляют
      все обратно на spread. Если есть идеи, как обрубить руки линтерам тут, то хорошо бы
      уменьшить количество кода тут. А пока вот так.
      */
      const stateClone = cloneDeep(state) as { data: IUser | null};
      const newUser: IUser | null = { ...stateClone?.data as IUser, status: action.payload };
      return { ...state, data: newUser };
    },
    [loadUser.rejected.type]: (state, action) => ({
      ...state,
      error: action.error,
      loading: false,
    }),
  },
});

export const {
  setData, setError, setLoading,
} = userSlice.actions;
export { loadUser, updateStatus };
export const userReducer = userSlice.reducer;
