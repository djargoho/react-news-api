import React, { useState, useCallback } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  const onClick = useCallback(async () => {
    console.log('CLICK');
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=084c3f807c5c460ea07bda98e5a0b7c8',
      );
      setData(response.data);
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} />}
    </div>
  );
}

export default App;
