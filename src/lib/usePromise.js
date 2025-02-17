import { useState, useEffect } from 'react';

const usePromise = (promiseCreator, deps) => {
  const [loading, setLoading] = useState(false);
  const [resolved, setResolved] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const process = async () => {
      setLoading(true);

      try {
        const resolved = await promiseCreator();
        console.log('resolvedresolved', resolved);
        setResolved(resolved);
      } catch (e) {
        setError(e);
      }

      setLoading(false);
    };

    process();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  console.log('resolved', loading, resolved, error);

  return [loading, resolved, error];
};

export default usePromise;
