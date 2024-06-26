import useTrending from "../Hooks/useTrending";
import LoadingComponent from "../UI/LoadingComponent";
import MovieCard from "../UI/MovieCard";
import {
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/16/solid";
import { useRef, useEffect } from "react";

export default function Trending() {
  const { error, loading, trending, setPage, setLoading, page } = useTrending();
  const timeoutIdRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
    };
  }, []);

  function handlePrevious() {
    setLoading(true);
    timeoutIdRef.current = setTimeout(() => {
      setPage((prevPage) => {
        if (prevPage > 1) {
          return prevPage - 1;
        } else {
          return 1;
        }
      });
      setLoading(false);
    }, 3000);
  }

  function handleNext() {
    setLoading(true);
    timeoutIdRef.current = setTimeout(() => {
      setPage((prevPage) => prevPage + 1);
      setLoading(false);
    }, 3000);
  }
  return (
    <div>
      {error && <p>Error</p>}
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 mx-10">
            {trending.map((movie) => (
              <MovieCard
                key={movie.id}
                title={movie.title}
                overview={movie.overview}
                poster_path={movie.poster_path}
                vote={movie.vote_average}
                id={movie.id}
              />
            ))}
          </div>
          <div className="flex justify-center items-center gap-10 mb-5 mt-5">
            <button
              className="text-white bg-watch p-2 rounded min-w-24 flex gap-2 items-center justify-center"
              onClick={handlePrevious}
              disabled={loading}
            >
              <ArrowLeftCircleIcon className="w-5 h-5" />
              Previous
            </button>
            <p className="text-white">{page}</p>
            <button
              className="text-white bg-watch p-2 rounded min-w-24 flex gap-2 items-center justify-center"
              onClick={handleNext}
              disabled={loading}
            >
              Next
              <ArrowRightCircleIcon className="w-5 h-5" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
