import { createSlice, createSelector } from "@reduxjs/toolkit";

const startState = {
   dateValue: null
};



export const dateSlice = createSlice({
   name: 'date',
   initialState: startState,
   reducers: {
      changeDate: (state, { payload }) => {
         state.dateValue = payload;
      },
   }
});


export const dateReducer = dateSlice.reducer;

export const { changeDate } = dateSlice.actions;

export const selectDate = ({ date }) => date;

export const selectDateValue = createSelector(
   selectDate,
   ({ dateValue }) => dateValue
);

