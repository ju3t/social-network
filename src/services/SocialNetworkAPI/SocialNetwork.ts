import axiosLib from 'axios';
import {
    getUserRoute
} from './routes';

const axios = axiosLib.create();

/* eslint-disable import/prefer-default-export*/
export const getUser = async (id:number) => {
    const route = getUserRoute(id);
    return axios.get(route);
}
