import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: [],   
  newDisney: [],     
  original: [],      
  trending: []     
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      console.log("Setting movies in slice:", action.payload);
      state.recommend = action.payload.recommend;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectNewDisneyPlus = (state) => state.movie.newDisney;
export const selectOriginals = (state) => state.movie.original;
export const selectTrending = (state) => state.movie.trending;

export default movieSlice.reducer;
