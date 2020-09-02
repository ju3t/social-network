export const funcsRoutes = {
  urlApi: (host, api) => [host, api].join('/'),
  urlAudio: (hostApi, audios, all) => [hostApi, audios, all].join('/'),
};
