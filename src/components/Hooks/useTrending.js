import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useTrending = () => {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);

  const getTrending = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/trending/all/day?page=${page}&api_key=a010775c34fabfa9cef89de9fba2a335`
      );
      setTrending(response.data.results);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    getTrending();
  }, [getTrending]);

  return { error, trending, loading, setPage, setLoading, page };
};

export default useTrending;
