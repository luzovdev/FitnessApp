import { configureStore } from "@reduxjs/toolkit";
import { exercisesReducer } from "./slices/exercises";
export const store = configureStore({
   reducer: {
      exercises: exercisesReducer
   }
});