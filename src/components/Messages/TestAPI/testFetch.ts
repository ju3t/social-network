import { IsingleChat, Ichat, IdataBody } from '../../../types/chat';

export default async function getChats():Promise<Ichat[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(dataChats), 200);
  });
}
const dataChats = [
  {
    id: 10,
    type: 'groupChats',
    title: 'Bred',
    image: 'https://pbs.twimg.com/media/C_9Jh41UMAELd4v.jpg',
    lastMessage: 'Test init message60',
    active: null,
  },
  {
    id: 20,
    type: 'groupChats',
    title: 'Arnold',
    image: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
    lastMessage: 'Test init message60',
    active: null,
  },
  {
    id: 30,
    type: 'groupChats',
    title: 'Colin',
    image: 'https://4tololo.ru/sites/default/files/images/20151308202253.jpg?itok=XZXWgPTt',
    lastMessage: 'WTF',
    active: null,
  },
  {
    id: 40,
    type: 'groupChats',
    title: 'Natasha',
    image: 'https://pixnio.com/free-images/2017/11/30/2017-11-30-18-08-22.jpg',
    lastMessage: 'Test init message60',
    active: null,
  },
  {
    id: 50,
    type: 'groupChats',
    title: 'Leonard',
    image: 'http://yastart.ru/uploads/posts/2019-03/1553884944_10.jpg',
    lastMessage: 'Test init message60',
    active: null,
  },

];
