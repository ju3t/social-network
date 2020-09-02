import { pathAll, pathApi, pathAudios, pathHost } from '../constants/urlPaths';
import { funcsRoutes } from '../routes/funcsRoutes';

const urlApi = funcsRoutes.urlApi(pathHost, pathApi)
export const urlGetAllAudios = funcsRoutes.urlAudio(urlApi, pathAudios, pathAll)
