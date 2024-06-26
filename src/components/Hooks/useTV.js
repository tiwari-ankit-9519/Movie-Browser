import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useTV = () => {
  const [tv, setTV] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getTV = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=a010775c34fabfa9cef89de9fba2a335&page=${page}`
      );

      setTV(response.data.results);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    getTV();
  }, [getTV]);

  return { tv, loading, error, setPage, page, setLoading };
};

export default useTV;
