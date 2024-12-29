import movieReducer from "@/features/movieSlice";
import singleMovieReducer from "@/features/singleMovieSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    movieReducer: movieReducer,
    singleMovie: singleMovieReducer,
  },
});

export default store;
