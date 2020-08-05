const albums = [];

for (let i = 1; i <= 12; i += 1) {
  albums.push({
    id: i,
    link: '#',
    headline: `Альбом ${i}`,
    image: `https://picsum.photos/id/${i + 249}/326`,
    bigImage: `https://picsum.photos/id/${i + 249}/800/600`,
  });
}

export default albums;
