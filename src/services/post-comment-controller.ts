import axiosLib from 'axios';
import { ICreateComment } from '../types/comment';
import baseUrl from './config';

const axios = axiosLib.create();
axios.defaults.baseURL = `${baseUrl}postsComments/`;

export default async function addNewCommentToPost(postId: number, comment: ICreateComment) {
  return axios.post(`${postId}/comment`, comment);
}
