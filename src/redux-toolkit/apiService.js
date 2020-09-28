// const local = "http://localhost:3000/";
const web = 'http://91.241.64.178:5561/';
const urlBase = web;

export default class apiService {
  async apiGroups(page = 1, size = 15) {
    return fetch(`${urlBase}api/groups/all?page=${page}&size=${size}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    }).then((response) => response.json());
  }
}
