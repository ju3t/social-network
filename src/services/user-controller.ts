import { IUser, IUserFriend } from '../types/user';

export default class {
  static baseUrl = 'http://91.241.64.178:5561/api/user';

  static async fetching(path: string, data: any = null) {
    const res: Response = await fetch(`${this.baseUrl}${path}`, data);
    if (!res.ok) {
      throw new Error(`Fetching user-controller is status error ${res.status}`);
    }
    return res.json();
  }

  static async getUserById(id: number): Promise<IUser> {
    return this.fetching(`/${id}`);
  }

  static async getAllUsers(): Promise<IUser[]> {
    return this.fetching('/all');
  }

  static async createNewUser(data: IUser): Promise<IUser> {
    return this.fetching('/create', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  static async removeUserById(id: number) {
    return this.fetching(`/delete/${id}`, {
      method: 'DELETE',
      body: String(id),
    });
  }

  static async getFriendsByUserId(id: number): Promise<IUserFriend[]> {
    return this.fetching(`/getFriends/${id}`);
  }

  static async updateUser(data: IUser): Promise<IUser> {
    return this.fetching('/update', {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }
}
