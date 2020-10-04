import { createNewPost } from '../../../services/post-controller';
import IMedia from '../../../types/media';
import { ICreatePost } from '../../../types/post';
import { IUser } from '../../../types/user';

interface IFuncCreatePost {
    title: string,
    text: string,
    user: IUser,
    tags?: Array<string>,
    media?: IMedia
}

export default async function createPost({
  title,
  text,
  user,
  tags,
  media,
} : IFuncCreatePost) {
  if (!user?.userId) {
    throw new Error('unlogged');
  }
  const post: ICreatePost = {
    userId: user.userId,
    avatar: user.avatar,
    firstName: user.firstName,
    lastName: user.lastName,
    bookmarkAmount: 0,
    commentAmount: 0,
    likeAmount: 0,
    shareAmount: 0,
    persistDate: (new Date()).toString(),
    title,
    text,
  };
  await createNewPost(post);
}
