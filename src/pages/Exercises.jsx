import React, { useState } from "react";
import './styles/container.scss'
import { useSelector } from "react-redux";

import { selectExercisesItems } from "../redux/slices/exercises";

import { InfoExercisesPage } from "../components/Exercises/infoExercisesPage";
import { SearchExercises } from "../components/Exercises/serchExercise";
import { MuscleGroupsList } from "../components/Exercises/muscleGroupsList";
import { ExerciseList } from "../components/Exercises/exerciseList";
import { Paginate } from "../components/paginate";



export const Exercises = () => {
   const exercises = useSelector(selectExercisesItems);

   const [chosenMuscleGroup, setChosenMuscleGroup] = useState('all');

   const [itemOffset, setItemOffset] = useState(0);
   const exercisesPerPage = 10;
   const endOffset = itemOffset + exercisesPerPage;
   const currentExercises = exercises?.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(exercises?.length / exercisesPerPage);

   const handlePageClick = (event) => {
      const newOffset = (event.selected * exercisesPerPage) % exercises.length;
      setItemOffset(newOffset);
   };


   return (
      <div className='container'>
         <InfoExercisesPage />
         <SearchExercises />
         <MuscleGroupsList
            chosenMuscleGroup={chosenMuscleGroup}
            setChosenMuscleGroup={setChosenMuscleGroup} />
         <ExerciseList
            exercises={currentExercises}
            chosenMuscleGroup={chosenMuscleGroup}
         />
         <Paginate
            pageCount={pageCount}
            handlePageClick={handlePageClick}
         />

      </div>
   )
};


