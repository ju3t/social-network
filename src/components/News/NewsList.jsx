import React from 'react';
import NewsItem from './NewsItem';

export default function NewsList(props) {
  const { data } = props;
  const { news } = data;
  const listNews = news.map((item) => {
    return <NewsItem key={item.id} item={item} />;
  });
  return listNews;
}
