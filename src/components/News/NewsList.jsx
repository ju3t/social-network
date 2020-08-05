/* eslint-disable linebreak-style */
import React from 'react';
import NewsItem from './NewsItem';

export default function NewsList(props) {
  const {
    data: { news },
  } = props;

  const listNews = news.map((item) => <NewsItem key={item.id} item={item} />);
  return listNews;
}
