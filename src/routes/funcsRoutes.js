export const funcsRoutes = {
  urlApi: (host, api) => [host, api].join('/'),
  urlAllAudios: (hostApi, audios, all) => [hostApi, audios, all].join('/'),
  urlMyAudios: (hostApi, audios, user) => [hostApi, audios, user].join('/')
};
