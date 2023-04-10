import { createSlice, createSelector, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData, exerciseOptions } from "../../utils/fetchData";

const startState = {
   exercisesItems: null,
   muscleGroupsItems: null,
   isLoading: false,
};

export const getExercises = createAsyncThunk(
   'exercises/getExercises',
   async (_, { dispatch }) => {
      dispatch(setIsLoading(true))
      const res = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      dispatch(setExercises(res.map(exercise => ({ ...exercise, isAdded: false }))))
      dispatch(setIsLoading(false))
   }
);

export const getExercisesBySelectedMuscleGroup = createAsyncThunk(
   'exercises/getExercisesBySelectedMuscleGroup',
   async (muscleGroup, { dispatch }) => {
      dispatch(setIsLoading(true))
      const res = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${muscleGroup}`, exerciseOptions);
      dispatch(setExercises(res.map(exercise => ({ ...exercise, isAdded: false }))))
      dispatch(setIsLoading(false))
   }
);

export const getMuscleGroups = createAsyncThunk(
   'exercises/getMuscleGroups',
   async (_, { dispatch }) => {
      const res = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      dispatch(setMuscleGroups(res))
   }
);

export const exercisesSlice = createSlice({
   name: 'exercises',
   initialState: startState,
   reducers: {
      setExercises: (state, { payload }) => {
         state.exercisesItems = payload;
      },
      setMuscleGroups: (state, { payload }) => {
         state.muscleGroupsItems = ['all', ...payload]
      },
      setIsLoading: (state, { payload }) => {
         state.isLoading = payload;
      },
      toggleIsAdded: (state, { payload }) => {
         state.exercisesItems = state.exercisesItems.map(({ isAdded, ...exercise }) => ({
            ...exercise,
            isAdded: exercise.id === payload ? !isAdded : isAdded
         }))
      }
   }
});


export const exercisesReducer = exercisesSlice.reducer;

export const { setExercises, setIsLoading, setMuscleGroups, toggleIsAdded } = exercisesSlice.actions;

export const selectExercises = ({ exercises }) => exercises;

export const selectExercisesItems = createSelector(
   selectExercises,
   ({ exercisesItems }) => exercisesItems
);

export const selectIsLoading = createSelector(
   selectExercises,
   ({ isLoading }) => isLoading
);
export const selectMuscleGroupsItems = createSelector(
   selectExercises,
   ({ muscleGroupsItems }) => muscleGroupsItems
);



