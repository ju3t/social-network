import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { urlGetAllAudios, urlGetMyAudios } from './urls';

export const fetchAudiosAll = async (): Promise<AxiosResponse> => axios.get(urlGetAllAudios);
export const fetchMyAudios = async (): Promise<AxiosResponse> => axios.get(urlGetMyAudios);
// TEST
export const fetchTESTarticles = async (): Promise<AxiosResponse> => axios.get('https://conduit.productionready.io/api/articles');
export const fetchTESTtoolkitApi = async (): Promise<AxiosResponse> => axios.get('https://reqres.in/api/users/1');
// TEST

axios.interceptors.request.use((config) => {
  config.headers['Access-Control-Allow-Origin'] = '*';
  return config;
});
