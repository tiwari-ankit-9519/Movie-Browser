import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import TrendingMovies from "./pages/TrendingMovies";
import MovieDetails from "./pages/MovieDetails";
import TVShowDetials from "./pages/TVShowDetials";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<TrendingMovies />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
        <Route path="/tv/:showId" element={<TVShowDetials />} />
      </Routes>
    </>
  );
}
export default App;
