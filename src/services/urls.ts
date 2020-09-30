import {
  pathAll,
  pathApi,
  pathAudios,
  pathGetFriends,
  pathHost,
  pathPartAudioOfUser,
  pathUser,
} from '../constants/urlPaths';
import funcsRoutes from '../routes/funcsRoutes';

const urlApi = funcsRoutes.urlApi(pathHost, pathApi);
export const urlGetAllAudios = funcsRoutes.urlAllAudios(urlApi, pathAudios, pathAll);
export const urlGetMyAudios = funcsRoutes.urlMyAudios(urlApi, pathAudios, pathPartAudioOfUser);
export const urlGetFriends = funcsRoutes.urlFriendsAudios(urlApi, pathUser, pathGetFriends);
