/* eslint-disable import/prefer-default-export */
import { uniqueId } from 'lodash';
// добавить сообщениям id либо id придёт от сервера
// заменить dateSend и timeSend на Date() и отредачить по date-fns
// отсортировать по дате либо придут отсортированные


const testData = [
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Lorem! Aliquam erat volutpat?',
    dateSend: '05/06/20',
    timeSend: '12:55',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'bogdan13',
    name: 'Богдан',
    messages: 'Pellentesque blandit nibh at leo venenatis, in semper ipsum dictum',
    dateSend: '05/06/20',
    timeSend: '12:58',
    image: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Nulla porttitor ligula quam, quis auctor felis consectetur non',
    dateSend: '05/06/20',
    timeSend: '12:59',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Nulla porttitor ligula quam, quis auctor felis consectetur non',
    dateSend: '05/06/20',
    timeSend: '12:59',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'bogdan13',
    name: 'Богдан',
    messages: 'Pellentesque blandit nibh at leo venenatis, in semper ipsum dictum',
    dateSend: '05/06/20',
    timeSend: '12:58',
    image: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Nulla porttitor ligula quam, quis auctor felis consectetur non',
    dateSend: '05/06/20',
    timeSend: '12:59',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Lorem! Aliquam erat volutpat?',
    dateSend: '05/06/20',
    timeSend: '13:40',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'bogdan13',
    name: 'Богдан',
    messages: 'Pellentesque blandit nibh at leo venenatis, in semper ipsum dictum',
    dateSend: '05/06/20',
    timeSend: '12:58',
    image: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Lorem! Aliquam erat volutpat?',
    dateSend: '05/06/20',
    timeSend: '13:40',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Lorem! Aliquam erat volutpat?',
    dateSend: '05/06/20',
    timeSend: '12:55',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'bogdan13',
    name: 'Богдан',
    messages: 'Pellentesque blandit nibh at leo venenatis, in semper ipsum dictum',
    dateSend: '05/06/20',
    timeSend: '12:58',
    image: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Nulla porttitor ligula quam, quis auctor felis consectetur non',
    dateSend: '05/06/20',
    timeSend: '12:59',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Nulla porttitor ligula quam, quis auctor felis consectetur non',
    dateSend: '05/06/20',
    timeSend: '12:59',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'bogdan13',
    name: 'Богдан',
    messages: 'Pellentesque blandit nibh at leo venenatis, in semper ipsum dictum',
    dateSend: '05/06/20',
    timeSend: '12:58',
    image: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Nulla porttitor ligula quam, quis auctor felis consectetur non',
    dateSend: '05/06/20',
    timeSend: '12:59',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Lorem! Aliquam erat volutpat?',
    dateSend: '05/06/20',
    timeSend: '13:40',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'bogdan13',
    name: 'Богдан',
    messages: 'Pellentesque blandit nibh at leo venenatis, in semper ipsum dictum',
    dateSend: '05/06/20',
    timeSend: '12:58',
    image: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Lorem! Aliquam erat volutpat?',
    dateSend: '05/06/20',
    timeSend: '13:40',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Lorem! Aliquam erat volutpat?',
    dateSend: '05/06/20',
    timeSend: '12:55',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'bogdan13',
    name: 'Богдан',
    messages: 'Pellentesque blandit nibh at leo venenatis, in semper ipsum dictum',
    dateSend: '05/06/20',
    timeSend: '12:58',
    image: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Nulla porttitor ligula quam, quis auctor felis consectetur non',
    dateSend: '05/06/20',
    timeSend: '12:59',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Nulla porttitor ligula quam, quis auctor felis consectetur non',
    dateSend: '05/06/20',
    timeSend: '12:59',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'bogdan13',
    name: 'Богдан',
    messages: 'Pellentesque blandit nibh at leo venenatis, in semper ipsum dictum',
    dateSend: '05/06/20',
    timeSend: '12:58',
    image: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Nulla porttitor ligula quam, quis auctor felis consectetur non',
    dateSend: '05/06/20',
    timeSend: '12:59',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Lorem! Aliquam erat volutpat?',
    dateSend: '05/06/20',
    timeSend: '13:40',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
  {
    id: uniqueId(),
    username: 'bogdan13',
    name: 'Богдан',
    messages: 'Pellentesque blandit nibh at leo venenatis, in semper ipsum dictum',
    dateSend: '05/06/20',
    timeSend: '12:58',
    image: 'https://igate.com.ua/upload/photo/0001/0001/3383/6955/55.jpg',
  },
  {
    id: uniqueId(),
    username: 'kirill22',
    name: 'Кирилл',
    messages: 'Lorem! Aliquam erat volutpat?',
    dateSend: '05/06/20',
    timeSend: '13:40',
    image: 'https://st.kp.yandex.net/images/actor_iphone/iphone360_1746394.jpg',
  },
];

export type IgroupMessageByUser = {
  id: string;
  username: string;
  name: string; 
  messages: {
    title: string;
    id: string;
  }[];
  dateSend: string;
  timeSend: string;
  image: string;
}

export const groupMessagesByUser:IgroupMessageByUser[] = testData.reduce((acc:Array<IgroupMessageByUser>, el) => {
  const lastAccElement:IgroupMessageByUser = acc[acc.length - 1];
  const lastAccIndex:number = acc.length - 1;

  const initialMessagesArray = { ...el, messages: [{ title: el.messages, id: uniqueId() }] };
  if (lastAccElement === undefined) return [initialMessagesArray];

  if (lastAccElement.username === el.username) {
    const newObject = {
      ...acc[lastAccIndex],
      messages: [...acc[lastAccIndex].messages, { title: el.messages, id: uniqueId() }],
    };
    return [...acc.splice(0, lastAccIndex), newObject];
  }
  return [...acc, initialMessagesArray];
}, []);

