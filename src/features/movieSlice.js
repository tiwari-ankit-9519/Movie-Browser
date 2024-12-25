import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  trendingTodayMovies: [],
  heroSectionMovie: [],
  popularMovies: [],
  topRatedMovies: [],
  upComingMovies: [],
  tvShowsAiringToday: [],
  loading: false,
  error: null,
};

export const getHeroSectionMovie = createAsyncThunk(
  "movie/getHeroSectionMovie",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=afd1a237927b4579c2b5b314e665ab89`
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getTrendingMoviesToday = createAsyncThunk(
  "movie/getTrendingMoviesToday",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=afd1a237927b4579c2b5b314e665ab89`
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getPopularMovies = createAsyncThunk(
  "movie/getPopularMovies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=afd1a237927b4579c2b5b314e665ab89`
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getTopRatedMovies = createAsyncThunk(
  "movie/getTopRatedMovies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=afd1a237927b4579c2b5b314e665ab89`
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getUpcomingMovies = createAsyncThunk(
  "movie/getUpcomingMovies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=afd1a237927b4579c2b5b314e665ab89`
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getPopularTVShows = createAsyncThunk(
  "movie/getPopularTVShows",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/airing_today?api_key=afd1a237927b4579c2b5b314e665ab89`
      );
      const data = await response.json();
      return data.results;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHeroSectionMovie.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.trendingTodayMovies = [];
        state.heroSectionMovie = [];
      })
      .addCase(getHeroSectionMovie.fulfilled, (state, action) => {
        state.loading = false;
        state.trendingTodayMovies = [];
        state.heroSectionMovie = action.payload;
      })
      .addCase(getHeroSectionMovie.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.trendingTodayMovies = [];
        state.heroSectionMovie = [];
      });

    builder
      .addCase(getTrendingMoviesToday.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.trendingTodayMovies = [];
      })
      .addCase(getTrendingMoviesToday.fulfilled, (state, action) => {
        state.loading = false;
        state.trendingTodayMovies = action.payload;
      })
      .addCase(getTrendingMoviesToday.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.trendingTodayMovies = [];
      });

    builder
      .addCase(getPopularMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.popularMovies = [];
      })
      .addCase(getPopularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.popularMovies = action.payload;
      })
      .addCase(getPopularMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.popularMovies = [];
      });

    builder
      .addCase(getTopRatedMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.topRatedMovies = [];
      })
      .addCase(getTopRatedMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.topRatedMovies = action.payload;
      })
      .addCase(getTopRatedMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.topRatedMovies = [];
      });

    builder
      .addCase(getUpcomingMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.upComingMovies = [];
      })
      .addCase(getUpcomingMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.upComingMovies = action.payload;
      })
      .addCase(getUpcomingMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.upComingMovies = [];
      });

    builder
      .addCase(getPopularTVShows.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.tvShowsAiringToday = [];
      })
      .addCase(getPopularTVShows.fulfilled, (state, action) => {
        state.loading = false;
        state.tvShowsAiringToday = action.payload;
      })
      .addCase(getPopularTVShows.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.tvShowsAiringToday = [];
      });
  },
});

const movieReducer = movieSlice.reducer;
export default movieReducer;
