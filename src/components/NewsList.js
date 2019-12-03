import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    //async를 사용하는 함수 따로 선언
    console.log(process.env);
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr&apiKey=${process.env.REACT_APP_NEWS_APIKEY}`,
        );

        setArticles(response.data.articles);
      } catch (error) {
        throw new Error(error);
      }

      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <NewsListBlock>Loading...</NewsListBlock>;
  }

  if (!articles) {
    return null;
  }

  //article이 존재할 때
  return (
    <NewsListBlock>
      {articles.map(article => {
        return <NewsItem key={article.url} article={article} />;
      })}
    </NewsListBlock>
  );
};

export default NewsList;
