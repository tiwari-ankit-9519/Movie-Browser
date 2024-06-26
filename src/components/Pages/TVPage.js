import useTV from "../Hooks/useTV";
import TVCard from "../UI/TVCard";
import { useRef, useEffect } from "react";
import {
  ArrowRightCircleIcon,
  ArrowLeftCircleIcon,
} from "@heroicons/react/16/solid";
import LoadingComponent from "../UI/LoadingComponent";

export default function TVPage() {
  const { error, tv, loading, setPage, page, setLoading } = useTV();
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

  console.log(tv);
  return (
    <div>
      <div>
        {error && <p>Error</p>}
        {loading ? (
          <LoadingComponent />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {tv.map((t) => (
                <TVCard
                  title={t.name}
                  backdrop_path={t.backdrop_path}
                  key={t.id}
                  vote_average={t.vote_average}
                />
              ))}
            </div>
            <div className="flex justify-center items-center gap-10 mb-5 mt-10">
              <button
                className="text-white bg-watch p-2 rounded min-w-24 flex gap-2 items-center justify-center"
                onClick={handlePrevious}
              >
                <ArrowLeftCircleIcon className="w-5 h-5" />
                Previous
              </button>
              <p className="text-white">{page}</p>
              <button
                className="text-white bg-watch p-2 rounded min-w-24 flex gap-2 items-center justify-center"
                onClick={handleNext}
              >
                Next
                <ArrowRightCircleIcon className="w-5 h-5" />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
