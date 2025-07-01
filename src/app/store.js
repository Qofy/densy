import { configureStore } from '@reduxjs/toolkit';
import reducer from '../features/userSlice';
import movieReducer from "../features/movie/movieSlice"
export default configureStore({
  reducer: {
    user: reducer,
    movie: movieReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
