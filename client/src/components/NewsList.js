import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NewsItem from './NewsItem';

const NewsList = ({ category }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await axios.get(`/api/news/${category}`);
      setNews(response.data);
    };
    fetchNews();
  }, [category]);

  return (
    <div>
      {news.map((item, index) => (
        <NewsItem key={index} item={item} />
      ))}
    </div>
  );
};

export default NewsList;
