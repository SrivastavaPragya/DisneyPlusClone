import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
// Assuming movieReducer is commented out because it's not imported or defined above.
// import movieReducer from "../features/movie/movieSlice";

export default configureStore({
  reducer: {
    user: userReducer,
    // Uncomment the following line once movieReducer is defined and imported
    // movie: movieReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
