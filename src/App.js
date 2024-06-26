import Home from "./components/Pages/Home";
import Navbar from "./components/UI/Navbar";
import MovieDetail from "./components/Pages/MovieDetail";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import TVPage from "./components/Pages/TVPage";
import SearchPage from "./components/Pages/SearchPage";
import Trending from "./components/Pages/Trending";
import Movies from "./components/Pages/Movies";
import PageNotFound from "./components/Pages/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tv" element={<TVPage />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
