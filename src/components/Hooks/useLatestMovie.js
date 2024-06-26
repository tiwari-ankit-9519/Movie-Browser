import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useLatestMovie = () => {
  const [latestMovie, setLatestMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(Math.floor(Math.random() * 500) + 1);

  const getLatestMovie = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?page=${page}&api_key=a010775c34fabfa9cef89de9fba2a335`
      );
      setLatestMovie(response.data.results);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    getLatestMovie();
  }, [getLatestMovie]);

  return { latestMovie, setPage, loading, error };
};

export default useLatestMovie;
