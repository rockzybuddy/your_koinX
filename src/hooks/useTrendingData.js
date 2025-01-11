import { useState, useEffect } from 'react';

const useTrendingData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending?x_cg_demo_api_key=CG-AU81Nz3BRbU75yKC4e3fRka6');
        const json = await response.json();
        setData(json.coins.slice(0, 3)); 
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchTrendingData();
  }, []);

  return { data, loading, error };
};

export default useTrendingData;
