/* eslint-disable linebreak-style */
/* eslint-disable no-multi-str */
/* eslint-disable import/prefer-default-export */

/* Тестовые данные из-за отсутствия API */

export const mockData = {
  news: [
    {
      id: 1,
      title: 'Заголовок',
      img: 'https://vecherka74.ru/uploads/posts/2017-03/1489665471_fcq3yav1a3o.jpg',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae rutrum dolor\
      nec lacinia purus. Sed fringilla posuere erat, a porttitor ipsum pellentesque sagittis.\
       Donec eros metus, scelerisque in eleifend vel, tempor nec dui. Pellentesque iaculis a urna ac blandit.\
       Nullam id eleifend quam. Integer non odio rhoncus, ultricies arcu dignissim, pretium velit. Curabitur id tincidunt risus.\
      In sit amet sapien nec massa varius laoreet consectetur at urna. In euismod sapien in elementum rhoncus. Cras ac urna dictum,\
      rhoncus ex non, pellentesque ante. Maecenas venenatis tincidunt odio. Sed nunc orci, faucibus ut velit eget, viverra suscipit orci.\
      Sed tempor ipsum enim, in molestie arcu luctus ac. Sed sit amet enim tincidunt, rhoncus tortor non, porta diam. Proin erat dui,\
      molestie eget bibendum ut, vehicula sit amet enim. Nulla leo justo, luctus vitae tellus sed, volutpat tincidunt est. Vestibulum aliquam\
      libero purus, eget ullamcorper ex aliquam ac. Vestibulum euismod porta blandit. Vestibulum id mauris gravida, semper ipsum a, auctor tellus.\
      Donec pharetra quam non dui congue commodo. Sed auctor, ex ut convallis elementum, erat magna pulvinar erat, nec elementum eros turpis a est.\
      In sed quam eu nunc interdum fringilla. Etiam faucibus id odio vitae tempor. Pellentesque vitae facilisis neque, eget ultrices urna. Donec eu\
      pretium mi. Phasellus a sapien enim. Vivamus turpis odio, posuere ac nunc eget, ultricies mollis tellus. Pellentesque fermentum felis neque, at\
      suscipit nisi dictum nec. Aliquam consequat in lacus at aliquet. Nulla facilisi.',
      tags: ['тег1', 'тег2', 'тег3'],
      author: 'Николай',
      time: '07.07.2020 в 00:07',
      favoritesCount: 0,
      likesCount: 54,
      commentsCount: 150,
      repostsCount: 3,
    },
    {
      id: 2,
      title: 'Другой Заголовок',
      img: 'https://i.pinimg.com/236x/f4/d2/96/f4d2961b652880be432fb9580891ed62.jpg',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae rutrum dolor\
      nec lacinia purus. Sed fringilla posuere erat, a porttitor ipsum pellentesque sagittis.\
       Donec eros metus, scelerisque in eleifend vel, tempor nec dui. Pellentesque iaculis a urna ac blandit.\
       Nullam id eleifend quam. Integer non odio rhoncus, ultricies arcu dignissim, pretium velit. Curabitur id tincidunt risus.\
      In sit amet sapien nec massa varius laoreet consectetur at urna. In euismod sapien in elementum rhoncus. Cras ac urna dictum,\
      rhoncus ex non, pellentesque ante. Maecenas venenatis tincidunt odio. Sed nunc orci, faucibus ut velit eget, viverra suscipit orci.\
      Sed tempor ipsum enim, in molestie arcu luctus ac. Sed sit amet enim tincidunt, rhoncus tortor non, porta diam. Proin erat dui,\
      molestie eget bibendum ut, vehicula sit amet enim. Nulla leo justo, luctus vitae tellus sed, volutpat tincidunt est. Vestibulum aliquam\
      libero purus, eget ullamcorper ex aliquam ac. Vestibulum euismod porta blandit. Vestibulum id mauris gravida, semper ipsum a, auctor tellus.\
      Donec pharetra quam non dui congue commodo. Sed auctor, ex ut convallis elementum, erat magna pulvinar erat, nec elementum eros turpis a est.\
      In sed quam eu nunc interdum fringilla. Etiam faucibus id odio vitae tempor. Pellentesque vitae facilisis neque, eget ultrices urna. Donec eu\
      pretium mi. Phasellus a sapien enim. Vivamus turpis odio, posuere ac nunc eget, ultricies mollis tellus. Pellentesque fermentum felis neque, at\
      suscipit nisi dictum nec. Aliquam consequat in lacus at aliquet. Nulla facilisi.',
      tags: ['тег1', 'тег2', 'тег3'],
      author: 'Елена',
      time: '07.07.2020 в 00:07',
      favoritesCount: 6,
      likesCount: 59,
      commentsCount: 10,
      repostsCount: 30,
    },
    {
      id: 3,
      title: 'Срочная новость',
      img:
        'https://avatars.mds.yandex.net/get-zen_doc/1592767/pub_5e691feab577ad15720eeaa5_5e691fec22fd04208369b85a/scale_1200',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae rutrum dolor\
      nec lacinia purus. Sed fringilla posuere erat, a porttitor ipsum pellentesque sagittis.\
       Donec eros metus, scelerisque in eleifend vel, tempor nec dui. Pellentesque iaculis a urna ac blandit.\
       Nullam id eleifend quam. Integer non odio rhoncus, ultricies arcu dignissim, pretium velit. Curabitur id tincidunt risus.\
      In sit amet sapien nec massa varius laoreet consectetur at urna. In euismod sapien in elementum rhoncus. Cras ac urna dictum,\
      rhoncus ex non, pellentesque ante. Maecenas venenatis tincidunt odio. Sed nunc orci, faucibus ut velit eget, viverra suscipit orci.\
      Sed tempor ipsum enim, in molestie arcu luctus ac. Sed sit amet enim tincidunt, rhoncus tortor non, porta diam. Proin erat dui,\
      molestie eget bibendum ut, vehicula sit amet enim. Nulla leo justo, luctus vitae tellus sed, volutpat tincidunt est. Vestibulum aliquam\
      libero purus, eget ullamcorper ex aliquam ac. Vestibulum euismod porta blandit. Vestibulum id mauris gravida, semper ipsum a, auctor tellus.\
      Donec pharetra quam non dui congue commodo. Sed auctor, ex ut convallis elementum, erat magna pulvinar erat, nec elementum eros turpis a est.\
      In sed quam eu nunc interdum fringilla. Etiam faucibus id odio vitae tempor. Pellentesque vitae facilisis neque, eget ultrices urna. Donec eu\
      pretium mi. Phasellus a sapien enim. Vivamus turpis odio, posuere ac nunc eget, ultricies mollis tellus. Pellentesque fermentum felis neque, at\
      suscipit nisi dictum nec. Aliquam consequat in lacus at aliquet. Nulla facilisi.',
      tags: ['тег1', 'тег2', 'тег3'],
      author: 'Александр',
      time: '07.07.2020 в 00:07',
      favoritesCount: 24,
      likesCount: 0,
      commentsCount: 0,
      repostsCount: 8,
    },
  ],
};
