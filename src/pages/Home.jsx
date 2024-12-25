import HeroSectionCarousel from "@/components/HeroSectionCarousel";
import MovieCard from "@/components/MovieCard";
import Sidebar from "@/components/Sidebar";
import MovieSkeleton from "@/components/Skeleton";
import TVCard from "@/components/TVCard";
import {
  getHeroSectionMovie,
  getPopularMovies,
  getPopularTVShows,
  getTopRatedMovies,
  getTrendingMoviesToday,
  getUpcomingMovies,
} from "@/features/movieSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    loading,
    heroSectionMovie,
    trendingTodayMovies,
    popularMovies,
    topRatedMovies,
    upComingMovies,
    tvShowsAiringToday,
  } = useSelector((state) => state.movieReducer);

  useEffect(() => {
    dispatch(getHeroSectionMovie());
    dispatch(getTrendingMoviesToday());
    dispatch(getPopularMovies());
    dispatch(getTopRatedMovies());
    dispatch(getUpcomingMovies());
    dispatch(getPopularTVShows());
  }, [dispatch]);

  console.log(tvShowsAiringToday);

  const handleClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  const handleTVClick = (showId) => {
    navigate(`/tv/${showId}`);
  };

  return (
    <main
      className="p-[2%] overflow-hidden absolute right-0"
      style={{
        width: "calc(100% - 25rem)",
      }}
    >
      <div className="w-[3orem] fixed left-0 top-0">
        <Sidebar />
      </div>
      <h1 className="text-3xl font-bold mb-4">Home</h1>
      <div className="w-full h-[40rem] mb-8">
        <HeroSectionCarousel
          heroSectionMovie={heroSectionMovie}
          loading={loading}
        />
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-4">Trending Today</h2>
        <div className="flex gap-5 overflow-x-auto">
          {loading
            ? Array.from({ length: 20 }).map((_, index) => (
                <div key={index} className="h-[30rem]">
                  <MovieSkeleton />
                </div>
              ))
            : trendingTodayMovies &&
              trendingTodayMovies.map((movie, index) => (
                <MovieCard
                  key={movie.id || index}
                  movie={movie}
                  onClick={handleClick}
                />
              ))}
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-4">Popular Movies</h2>
        <div className="flex gap-5 overflow-x-auto">
          {loading
            ? Array.from({ length: 20 }).map((_, index) => (
                <div key={index} className="h-[30rem]">
                  <MovieSkeleton />
                </div>
              ))
            : popularMovies &&
              popularMovies.map((movie, index) => (
                <MovieCard
                  key={movie.id || index}
                  movie={movie}
                  onClick={handleClick}
                />
              ))}
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-4">Top Rated Movies</h2>
        <div className="flex gap-5 overflow-x-auto">
          {loading
            ? Array.from({ length: 20 }).map((_, index) => (
                <div key={index} className="h-[30rem]">
                  <MovieSkeleton />
                </div>
              ))
            : topRatedMovies &&
              topRatedMovies.map((movie, index) => (
                <MovieCard
                  key={movie.id || index}
                  movie={movie}
                  onClick={handleClick}
                />
              ))}
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-4">Upcoming Movies</h2>
        <div className="flex gap-5 overflow-x-auto">
          {loading
            ? Array.from({ length: 20 }).map((_, index) => (
                <div key={index} className="h-[30rem]">
                  <MovieSkeleton />
                </div>
              ))
            : upComingMovies &&
              upComingMovies.map((show, index) => (
                <TVCard
                  key={show.id || index}
                  show={show}
                  onClick={handleClick}
                />
              ))}
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-bold mb-4">TV Shows airing Today</h2>
        <div className="flex gap-5 overflow-x-auto">
          {loading
            ? Array.from({ length: 20 }).map((_, index) => (
                <div key={index} className="h-[30rem]">
                  <MovieSkeleton />
                </div>
              ))
            : tvShowsAiringToday &&
              tvShowsAiringToday.map((show, index) => (
                <TVCard
                  key={show.id || index}
                  show={show}
                  onClick={handleTVClick}
                />
              ))}
        </div>
      </div>
    </main>
  );
}

export default Home;
