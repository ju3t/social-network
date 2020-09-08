import { urlGetAllAudios, urlGetMyAudios } from './urls';
import axios from 'axios';


export const fetchAudiosAll = async () => axios.get(urlGetAllAudios);
export const fetchMyAudios = async () => axios.get(urlGetMyAudios);
