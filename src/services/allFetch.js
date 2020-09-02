import { urlGetAllAudios } from './urls';
import axios from 'axios';


export const fetchAudiosAll = async () => axios.get(urlGetAllAudios);
