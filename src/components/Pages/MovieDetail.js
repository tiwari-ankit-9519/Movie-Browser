import { useState } from "react";
import useSingleMovie from "../Hooks/useSingleMovie";
import useLatestMovie from "../Hooks/useLatestMovie";

import { InformationCircleIcon, PlayIcon } from "@heroicons/react/16/solid";
import MovieCard from "../UI/MovieCard";
import LoadingComponent from "../UI/LoadingComponent";

export default function MovieDetail() {
  const [openInfo, setOpeInfo] = useState(false);
  const { movie } = useSingleMovie();
  const { latestMovie, loading } = useLatestMovie();

  console.log(latestMovie);

  const handleInfoButton = () => {
    setOpeInfo(!openInfo);
  };

  const filteredData = latestMovie.filter((m) => m.id !== movie.id);

  const finalImage = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <>
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-2 md:gap-10 mx-0 mb-10 justify-center bg-card rounded-md">
        <div className="relative w-full md:w-1/3 lg:w-1/4 h-[300px] md:h-auto lg:h-auto rounded-t-md md:rounded-bl-md overflow-hidden">
          <img
            src={finalImage}
            alt="poster"
            className="w-full h-full object-cover rounded-t-md md:rounded-bl-md md:rounded-tl-md md:rounded-tr-none"
          />
        </div>

        <div className="flex flex-col p-5 md:p-10 w-full md:w-2/3 lg:w-3/4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white">
            {movie.title}
          </h1>
          <p className="text-lg text-white mt-2">{movie.tagline}</p>
          <div className="flex items-center gap-5 mt-3 text-lg text-white">
            <span>Rating:</span>
            <span className="p-2 bg-yellow-500 rounded-md">
              {movie?.vote_average?.toFixed(1)}
            </span>
          </div>
          <div className="flex gap-5 items-center mt-10">
            <button
              className="p-2 bg-watch min-w-[100px] rounded-md text-lg text-white flex items-center gap-2 justify-center"
              onClick={handleInfoButton}
            >
              <InformationCircleIcon className="w-6 h-6" />
              Info
            </button>
            <button className="p-2 bg-watch min-w-[100px] rounded-md text-lg text-white flex items-center gap-2 justify-center">
              <PlayIcon className="w-6 h-6" />
              Play
            </button>
          </div>
          {openInfo ? (
            <p className="text-lg text-justify text-white mt-10">
              {movie.overview}
            </p>
          ) : (
            <>
              <div className="flex gap-2 mt-10 items-center">
                <p className="text-white text-xl font-semibold">Genre:</p>
                <div className="flex flex-wrap gap-2">
                  {movie?.genres?.map((genre) => (
                    <p className="text-white" key={genre.id}>
                      {genre.name}
                    </p>
                  ))}
                </div>
              </div>
              <p className="text-white font-semibold mt-5">
                {movie.release_date}
              </p>
              <div className="flex gap-2 mt-4">
                <span className="text-white font-semibold">Languages:</span>
                <div className="flex flex-wrap gap-2">
                  {movie?.spoken_languages?.map((l) => (
                    <p className="text-white" key={l.iso_639_1}>
                      {l.name}
                    </p>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <h1 className="text-white ml-10 text-3xl">Popular Movies</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 mx-10">
        {loading ? (
          <LoadingComponent />
        ) : (
          filteredData.map((m) => {
            return (
              <MovieCard
                key={m.id}
                title={m.original_title}
                overview={m.overview}
                poster_path={m.backdrop_path}
                vote={m.vote_average}
                id={m.id}
              />
            );
          })
        )}
      </div>
      ;
    </>
  );
}
