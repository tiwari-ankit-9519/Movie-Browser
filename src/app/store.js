import movieReducer from "@/features/movieSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    movieReducer: movieReducer,
  },
});

export default store;
