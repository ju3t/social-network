import { IUser } from './user';

export default interface IComment {
    id: number,
    comment: string,
    lastRedactionDate: string,
    persistDate: string,
    userDto: IUser
}