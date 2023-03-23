import { createSlice, createSelector, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData, exerciseOptions } from "../../utils/fetchData"


const startState = {
   scheduledExercisesItem: [],

}
export const getScheduledExercises = createAsyncThunk(
   'scheduledExercises/getScheduledExercises',
   async (id, { dispatch }) => {
      const exercisesById = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`, exerciseOptions);
      dispatch(setScheduledExercises(exercisesById))
   }
);


export const scheduledExercisesSlice = createSlice({
   name: 'scheduledExercises',
   initialState: startState,
   reducers: {
      setScheduledExercises: (state, { payload }) => {
         state.scheduledExercisesItem.push(payload)
      },
      removeScheduledExercises: (state, { payload }) => {
         // delete state.scheduledExercisesItem[payload];
      }
   }
});

export const scheduledExercisesReducer = scheduledExercisesSlice.reducer;
export const { setScheduledExercises, removeScheduledExercises } = scheduledExercisesSlice.actions;

export const selectScheduledExercises = ({ scheduledExercises }) => scheduledExercises;


export const selectScheduledExercisesItem = createSelector(
   selectScheduledExercises,
   ({ scheduledExercisesItem }) => scheduledExercisesItem
);



