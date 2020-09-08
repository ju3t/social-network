import { pathAll, pathApi, pathAudios, pathHost, pathUser } from '../constants/urlPaths';
import { funcsRoutes } from '../routes/funcsRoutes';

const urlApi = funcsRoutes.urlApi(pathHost, pathApi)
export const urlGetAllAudios = funcsRoutes.urlAllAudios(urlApi, pathAudios, pathAll)
export const urlGetMyAudios = funcsRoutes.urlMyAudios(urlApi, pathAudios, pathUser)
