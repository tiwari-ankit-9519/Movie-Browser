import MovieCard from "../UI/MovieCard";
import useMovies from "../Hooks/useMovie";

export default function Movies() {
  const { movies } = useMovies();

  console.log(movies);

  return (
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
  );
}
