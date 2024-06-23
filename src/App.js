import Home from "./components/Pages/Home";
import Navbar from "./components/UI/Navbar";
import MovieDetail from "./components/Pages/MovieDetail";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
