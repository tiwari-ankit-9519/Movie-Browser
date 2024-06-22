import React from "react";
import useMovies from "../Hooks/useMovie";

const Movies = () => {
  const { movies, page, setPage, loading, error } = useMovies();
  console.log(movies);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {movies.map((movie) => (
        <div key={movie.id}>
          <h1 className="text-white">{movie.title}</h1>
        </div>
      ))}
      <div className="flex gap-10">
        <button
          onClick={handlePreviousPage}
          disabled={page === 1}
          className="text-white bg-gray-400 rounded p-2 min-w-20 "
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          className="text-white bg-gray-400 rounded p-2 min-w-20"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Movies;
