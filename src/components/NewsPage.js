import React, { useState, useCallback } from 'react';
import NewsList from './NewsList';
import Categories from './Categories';

const NewsPage = ({ match }) => {
  console.log('MATCH, ', match);
  //   const [category, setCategory] = useState('all');
  const category = match.params.category || 'all';
  //   const onSelect = useCallback(category => setCategory(category), []);

  return (
    <>
      <Categories />
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
