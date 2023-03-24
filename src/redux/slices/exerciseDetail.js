import { createSlice, createSelector, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData, exerciseOptions, exerciseVideosOptions } from "../../utils/fetchData";

const startState = {
   exersiceDetailItem: null,
   exersiceVideosItems: null,
   isLoading: false,
};

export const getExerciseDetail = createAsyncThunk(
   'exerciseDetail/getExerciseDetail',
   async (id, { dispatch }) => {
      dispatch(setIsLoading(true))
      const exerciseDetail = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);
      dispatch(setExerciseDetailItem(exerciseDetail))
      const exerciseVideos = await fetchData(`https://youtube-search-and-download.p.rapidapi.com/search?query=${exerciseDetail.name}`, exerciseVideosOptions)
      dispatch(setExerciseVideosItems(exerciseVideos.contents))
      dispatch(setIsLoading(false))
   }
);

export const exerciseDetailSlice = createSlice({
   name: 'exerciseDetail',
   initialState: startState,
   reducers: {
      setExerciseDetailItem: (state, { payload }) => {
         state.exersiceDetailItem = payload;
         state.error = null;
      },
      setExerciseVideosItems: (state, { payload }) => {
         state.exersiceVideosItems = payload;
         state.error = null;
      },

      setIsLoading: (state, { payload }) => {
         state.isLoading = payload;
      }
   }
});


export const exerciseDetailReducer = exerciseDetailSlice.reducer;

export const { setExerciseDetailItem, setIsLoading, setExerciseVideosItems } = exerciseDetailSlice.actions;

export const selectExerciseDetail = ({ exerciseDetail }) => exerciseDetail;

export const selectExersiceDetailItem = createSelector(
   selectExerciseDetail,
   ({ exersiceDetailItem }) => exersiceDetailItem
);
export const selectExersiceVideosItems = createSelector(
   selectExerciseDetail,
   ({ exersiceVideosItems }) => exersiceVideosItems
);
export const selectIsLoading = createSelector(
   selectExerciseDetail,
   ({ isLoading }) => isLoading
);

