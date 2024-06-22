import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useMovies = (initialPage = 1) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(initialPage);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovieData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=a010775c34fabfa9cef89de9fba2a335&page=${page}`
      );
      setMovies(response.data.results);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    setTimeout(() => {
      fetchMovieData();
    }, 2000);
  }, [fetchMovieData]);

  return { movies, page, setPage, loading, error };
};

export default useMovies;
