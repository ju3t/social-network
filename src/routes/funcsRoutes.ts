const funcsRoutes = {
  urlApi: (host: string, api: string): string => [host, api].join('/'),
  urlAllAudios: (hostApi: string, audios: string, all: string): string => [hostApi, audios, all].join('/'),
  urlMyAudios: (hostApi: string, audios: string, user: string): string => [hostApi, audios, user].join('/'),
};

export default funcsRoutes;
