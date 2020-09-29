// const local = "http://localhost:3000/";
const web = 'http://91.241.64.178:5561/';

export default class {
  static urlBase = web;

  static async fetching(path: string, data: any = null) {
    const res: Response = await fetch(`${this.urlBase}${path}`, data);
    if (!res.ok) {
      throw new Error(`Fetching user-controller is status error ${res.status}`);
    }
    return res.json();
  }

  static async apiGroups(page = 1, size = 15) {
    return this.fetching(`api/groups/all?page=${page}&size=${size}`);
  }
}
