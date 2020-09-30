export default function errFetchHandler(err: any, argThunkAPI: any): string {
  if (err.message === 'Network Error') {
    console.log('WORKED ERR');
    return argThunkAPI.rejectWithValue('Упал сервер');
  }
  throw err;
}
