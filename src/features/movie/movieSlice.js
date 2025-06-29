import { createSlice, original } from "@reduxjs/toolkit";


const initialState = {
  recommended: null,
  newDisney: null,
  original: null,
  trending: null
}

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommended = action.payload.recommended;
      state.newDisney = action.payload.newDisney;
      state.original = action.payload.original;
      state.trending = action.payload.trending
    },
  },
})

export const {setMovies} = movieSlice.actions

export const selectReccommended = state => state.movie.recommended;
export const selectNewDisneyPlus = state => state.movie.newDisney;
export const selectOriginals = state => state.movie.original;
export const selectTrending = state => state.movie.trending

export default movieSlice.reducer