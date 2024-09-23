import { useEffect, useState } from 'react';
import { apiKey } from '@/assets/apiInfo';

export const useDetailFetch = (api, id) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const endUrl = `/api/openapi/${apiKey}/json/${api}/1/50?RECIPE_ID=${id}`;

  useEffect(() => {
    fetch(endUrl)
      .then(res => res.json())
      .then(res => {
        setData(res);
        setLoading(false);
      })
      .catch(err => setError(err));
  }, []);

  return { loading, data, error };
};
