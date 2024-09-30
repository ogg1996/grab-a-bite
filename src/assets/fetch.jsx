import { useEffect, useState } from 'react';
import { apiKey } from '@/assets/apiInfo';

// 재료 정보
export const useAPIFetch = (api, id) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const endUrl = `/api/openapi/${apiKey}/json/${api}/1/50?RECIPE_ID=${id}`;

  useEffect(() => {
    fetch(endUrl)
      .then(res => res.json())
      .then(res => {
        setData(res.Grid_20150827000000000227_1.row);
        setLoading(false);
      })
      .catch(err => setError(err));
  }, []);

  return { loading, data, error };
};
// 기본정보, 과정정보
export const useJsonServerFetch = (port, id = -1) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  let endUrl;
  if (id !== -1) {
    endUrl = `http://localhost:${port}/data?RECIPE_ID=${id}`;
  } else {
    endUrl = `http://localhost:${port}/data`;
  }

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
