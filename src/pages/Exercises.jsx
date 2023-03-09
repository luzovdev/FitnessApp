import React from "react";

import { InfoExercisesPage } from "../components/infoExercisesPage";
import { SearchExercise } from "../components/serchExercise";
import { MuscleGroups } from "../components/muscleGroups";
import { ExerciseList } from "../components/exerciseList";

const wrapperForExercisesPage = {
   paddingLeft: '75px',
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   paddingTop: '50px'
};

export const Exercises = () => {
   return (
      <div style={wrapperForExercisesPage}>
         <InfoExercisesPage />
         <SearchExercise />
         <MuscleGroups />
         <ExerciseList />
      </div>
   )
};