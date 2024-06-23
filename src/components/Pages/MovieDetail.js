import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";

import { InformationCircleIcon, PlayIcon } from "@heroicons/react/16/solid";

export default function MovieDetail() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});
  const [openInfo, setOpeInfo] = useState(false);

  console.log(movie);

  const handleInfoButton = () => {
    setOpeInfo(!openInfo);
  };

  const getMovieById = useCallback(async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=a010775c34fabfa9cef89de9fba2a335&page`
    );
    setMovie(response.data);
  }, [movieId]);

  useEffect(() => {
    getMovieById();
  }, [getMovieById]);

  const finalImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  return (
    <>
      <div className="flex gap-10 mx-10 border border-white mt-5">
        <img src={finalImage} alt="poster" />
        <div className="flex flex-col p-10">
          <h1 className="text-7xl text-white">{movie.title}</h1>
          <div className="flex gap-10 items-center mt-10">
            <button
              className="p-2 bg-watch min-w-24 rounded-md text-xl text-white flex items-center gap-2 justify-center"
              onClick={handleInfoButton}
            >
              <InformationCircleIcon className="w-6 h-6" />
              Info
            </button>
            <button className="p-2 bg-watch min-w-24 rounded-md text-xl text-white flex items-center gap-2 justify-center">
              <PlayIcon className="w-6 h-6" />
              Play
            </button>
          </div>
          {openInfo && (
            <p className="text-lg text-justify text-white mt-10">
              {movie.overview}
            </p>
          )}
          <div className="flex gap-10 mt-10">
            <p className="text-white">Genre:</p>
            {movie?.genres?.map((genre) => (
              <p className="text-white" key={genre.id}>
                {genre.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
