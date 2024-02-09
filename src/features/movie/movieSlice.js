import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    recommend: null,
    newDisney: null,
    original: null,
    trending: null,
  };
  
  //once we will get data from firebase we will store it here
  const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {

        // The setMovies function updates the movie slice of your application's state with new data. This data is expected to come from an action's payload. When an action of the type that setMovies handles is dispatched, this reducer function is called with the current state of the slice and the action object.
      setMovies: (state, action) => {
        state.recommend = action.payload.recommend;
        state.newDisney = action.payload.newDisney;
        state.original = action.payload.original;
        state.trending = action.payload.trending;
      },
    },
  });
  
  export const { setMovies } = movieSlice.actions;
  
  export const selectRecommend = (state) => state.movie.recommend;
  export const selectNewDisney = (state) => state.movie.newDisney;
  export const selectOriginal = (state) => state.movie.original;
  export const selectTrending = (state) => state.movie.trending;
  
  export default movieSlice.reducer;