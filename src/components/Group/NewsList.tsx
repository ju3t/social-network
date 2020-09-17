import React from 'react';
import NewsItem from './NewsItem';

interface Idata {
  data: {
    data: {
      news: Inews[];
    };
  };
}

interface Inews {
  id: number;
  title: string;
  img: string;
  text: string;
  tags: string[];
  author: string;
  time: string;
  favoritesCount: number;
  likesCount: number;
  commentsCount: number;
  repostsCount: number;
}
const NewsList = ({
  data: {
    data: { news },
  },
}: Idata) => {
  const ListNews = news.map((item: Inews) => <NewsItem key={item.id} item={item} />);
  return <>{ListNews}</>;
};

export default NewsList;
