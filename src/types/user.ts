export interface IUser {
  userId: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  education: string;
  aboutMe: string;
  avatar: string;
  email: string;
  password: string;
  city: string;
  linkSite?: string;
  roleName: string;
  status?: string;
  activeName?: string;
}

export interface IUserFriend {
  friendId: number;
  id: number;
  userId: number;
}
