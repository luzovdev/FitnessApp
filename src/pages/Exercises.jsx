import React from "react";

import { InfoExercisesPage } from "../components/infoExercisesPage";
import { SearchExercise } from "../components/serchExercise";
import { MuscleGroups } from "../components/muscleGroups";


const wrapperForExercisesPage = {
   paddingLeft: '75px',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center'
};

export const Exercises = () => {
   return (
      <div style={wrapperForExercisesPage}>
         <InfoExercisesPage />
         <SearchExercise />
         <MuscleGroups />
      </div>
   )
};