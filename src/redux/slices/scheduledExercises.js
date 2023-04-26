import { createSlice, createSelector } from "@reduxjs/toolkit";



const startState = {
   scheduledExercisesItem: [],
};


export const scheduledExercisesSlice = createSlice({
   name: 'scheduledExercises',
   initialState: startState,
   reducers: {
      setScheduledExercises: (state, { payload }) => {
         if (payload) {
            const { exercises } = payload;
            state.scheduledExercisesItem = exercises;
         } else {
            state.scheduledExercisesItem = [];
         }
      },
      toggleСompletedScheduledExercise: (state, { payload }) => {
         const toggleScheduledExercise = state.scheduledExercisesItem.find((item) => item.id === payload);
         toggleScheduledExercise.completed = !toggleScheduledExercise.completed;
      },
      addPowerIndicators: (state, { payload }) => {
         const exercise = state.scheduledExercisesItem.find((item) => item.id === payload.id);
         exercise.powerIndicators.push(payload.indicators)
      },
   }
});

export const scheduledExercisesReducer = scheduledExercisesSlice.reducer;
export const {
   setScheduledExercises,
   toggleСompletedScheduledExercise,
   addPowerIndicators
} = scheduledExercisesSlice.actions;

export const selectScheduledExercises = ({ scheduledExercises }) => scheduledExercises;


export const selectScheduledExercisesItem = createSelector(
   selectScheduledExercises,
   ({ scheduledExercisesItem }) => scheduledExercisesItem
);





