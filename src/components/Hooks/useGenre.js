import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useGenre = () => {
  const [genre, setGenre] = useState([]);

  const getGenre = useCallback(async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=a010775c34fabfa9cef89de9fba2a335&language=en-US"
    );
    setGenre(response.data.genres);
  }, []);

  useEffect(() => {
    getGenre();
  }, [getGenre]);

  return { genre };
};

export default useGenre;
