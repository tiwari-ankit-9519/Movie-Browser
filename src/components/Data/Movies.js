import MovieCard from "../UI/MovieCard";
import useMovies from "../Hooks/useMovie";
import LoadingComponent from "../UI/LoadingComponent";
import {
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/16/solid";
import { useState, useRef, useEffect } from "react";

export default function Movies() {
  const { movies, setPage, page } = useMovies();
  const [isLoading, setIsLoading] = useState(false);
  const timeoutIdRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  function handlePrevious() {
    setIsLoading(true);
    timeoutIdRef.current = setTimeout(() => {
      setPage((prevPage) => {
        if (prevPage > 1) {
          return prevPage - 1;
        } else {
          return 1;
        }
      });
      setIsLoading(false);
    }, 3000);
  }

  function handleNext() {
    setIsLoading(true);
    timeoutIdRef.current = setTimeout(() => {
      setPage((prevPage) => prevPage + 1);
      setIsLoading(false);
    }, 3000);
  }

  return (
    <>
      {isLoading && <LoadingComponent />}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 mx-10">
        {movies.map((m) => (
          <MovieCard
            key={m.id}
            title={m.title}
            overview={m.overview}
            poster_path={m.backdrop_path}
            vote={m.vote_average}
          />
        ))}
      </div>
      <div className="flex justify-center items-center gap-10 mb-5">
        <button
          className="text-white bg-watch p-2 rounded min-w-24 flex gap-2 items-center justify-center"
          onClick={handlePrevious}
          disabled={isLoading}
        >
          <ArrowLeftCircleIcon className="w-5 h-5" />
          Previous
        </button>
        <p className="text-white">{page}</p>
        <button
          className="text-white bg-watch p-2 rounded min-w-24 flex gap-2 items-center justify-center"
          onClick={handleNext}
          disabled={isLoading}
        >
          Next
          <ArrowRightCircleIcon className="w-5 h-5" />
        </button>
      </div>
    </>
  );
}
