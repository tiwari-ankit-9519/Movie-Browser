import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: {},
  loading: false,
  error: null,
};

export const getSingleMovie = createAsyncThunk(
  "singleMovie/getSingleMovie",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=afd1a237927b4579c2b5b314e665ab89`
      );
      if (!response.ok) {
        throw new Error("Server Error!");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const singleMovieSlice = createSlice({
  name: "singleMovie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSingleMovie.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getSingleMovie.fulfilled, (state, action) => {
      state.movie = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(getSingleMovie.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

const singleMovieReducer = singleMovieSlice.reducer;
export default singleMovieReducer;
