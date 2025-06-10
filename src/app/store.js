import { configureStore } from '@reduxjs/toolkit';
import reducer from '../features/userSlice';
export default configureStore({
  reducer: {
    user: reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
