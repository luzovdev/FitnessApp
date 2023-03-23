import { configureStore } from "@reduxjs/toolkit";
import { exercisesReducer } from "./slices/exercises";
import { exerciseDetailReducer } from "./slices/exerciseDetail";
import { scheduledExercisesReducer } from "./slices/scheduledExercises";
export const store = configureStore({
   reducer: {
      exercises: exercisesReducer,
      exerciseDetail: exerciseDetailReducer,
      scheduledExercises: scheduledExercisesReducer
   }
});

