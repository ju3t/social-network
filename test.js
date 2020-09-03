const o = {
  album: 'AlbumTestName 0',
  author: 'Test Author 0',
  icon: 'TestIcon0',
  id: 1,
  name: 'AudioTestName 0',
  persistDateTime: '2020-08-31T18:58:33.949876',
  url: 'www.myaudio.ru',
};

const o2 = {
  album: "AlbumTestName 95",
  author: "Test Author 95",
  icon: "TestIcon95",
  id: 96,
  name: "AudioTestName 95",
  persistDateTime: "2020-08-31T18:58:34.060237",
  url: "www.myaudio.ru",
}

const time = o.persistDateTime;
console.log('time', time, typeof time);
var today = new Date(time);
console.log('res', today.getMinutes());
