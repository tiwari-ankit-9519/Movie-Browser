import { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const useSingleMovie = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});
  const getMovieById = useCallback(async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=a010775c34fabfa9cef89de9fba2a335`
    );
    setMovie(response.data);
  }, [movieId]);

  useEffect(() => {
    getMovieById();
  }, [getMovieById]);

  return { movie };
};

export default useSingleMovie;
