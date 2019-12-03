import React, { useState, useCallback } from 'react';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import NewsPage from './components/NewsPage';
import { Route } from 'react-router-dom';
const App = () => {
  // const [category, setCategory] = useState('all');
  // const onSelect = useCallback(category => setCategory(category), []);

  /* ?의 의미는 category의 값이 선택적이라는 의미. 있을 수도 있고 없을 수도 있다. */
  return <Route path="/:category?" component={NewsPage} />;
};

export default App;
