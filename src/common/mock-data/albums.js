const albums = [];

for (let i = 1; i < 10; i += 1) {
  albums.push({
    id: i,
    link: '#',
    headline: `Название альбома-${i}`,
    image: `https://picsum.photos/id/${i + 249}/326`,
  });
}

export default albums;
