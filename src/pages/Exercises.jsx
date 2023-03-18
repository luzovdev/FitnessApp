import React, { useState } from "react";

import { InfoExercisesPage } from "../components/infoExercisesPage";
import { SearchExercises } from "../components/serchExercise";
import { MuscleGroupsList } from "../components/muscleGroupsList";
import { ExerciseList } from "../components/exerciseList";
import { Paginate } from "../components/paginate";
const wrapperForExercisesPage = {
   minHeight: '100%',
   overflow: 'hidden',
   maxWidth: '1440px',
   margin: '0 auto',
};



export const Exercises = () => {
   const [exercises, setExercises] = useState([]);
   const [chosenMuscleGroup, setChosenMuscleGroup] = useState('all');
   const [loading, setLoading] = useState(false);

   const exercisesPerPage = 10;
   const [itemOffset, setItemOffset] = useState(0);
   const endOffset = itemOffset + exercisesPerPage;
   const currentExercises = exercises.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(exercises.length / exercisesPerPage);

   const handlePageClick = (event) => {
      const newOffset = (event.selected * exercisesPerPage) % exercises.length;
      setItemOffset(newOffset);
   };


   return (
      <div style={wrapperForExercisesPage}>
         <InfoExercisesPage />
         <SearchExercises setExercises={setExercises} />
         <MuscleGroupsList
            chosenMuscleGroup={chosenMuscleGroup}
            setChosenMuscleGroup={setChosenMuscleGroup} />
         <ExerciseList
            exercises={currentExercises}
            chosenMuscleGroup={chosenMuscleGroup}
            setExercises={setExercises} />
         <Paginate
            pageCount={pageCount}
            handlePageClick={handlePageClick}
         />

      </div>
   )
};


