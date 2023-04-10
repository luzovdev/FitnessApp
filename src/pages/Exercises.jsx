import React, { useState, useEffect } from "react";
import './styles/container.scss'
import { useSelector } from "react-redux";

import { selectExercisesItems } from "../redux/slices/exercises";

import { InfoExercisesPage } from "../components/Exercises/infoExercisesPage";
import { SearchExercises } from "../components/Exercises/serchExercise";
import { MuscleGroupsList } from "../components/Exercises/muscleGroupsList";
import { ExerciseList } from "../components/Exercises/exerciseList";
import { Paginate } from "../components/UI/paginate";



export const Exercises = () => {

   const exercises = useSelector(selectExercisesItems);

   const [chosenMuscleGroup, setChosenMuscleGroup] = useState('all');
   const [itemOffset, setItemOffset] = useState(0);
   const [currentPage, setCurrentPage] = useState(0);

   const exercisesPerPage = 10;
   const endOffset = itemOffset + exercisesPerPage;
   const currentExercises = exercises?.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(exercises?.length / exercisesPerPage);

   const handlePageClick = (event) => {
      setCurrentPage(event.selected)
      const newOffset = (event.selected * exercisesPerPage) % exercises.length;
      setItemOffset(newOffset);
   };

   useEffect(() => {
      setItemOffset(0)
      setCurrentPage(0)
   }, [chosenMuscleGroup])

   return (
      <div className='container'>
         <InfoExercisesPage />
         <SearchExercises />
         <MuscleGroupsList
            chosenMuscleGroup={chosenMuscleGroup}
            setChosenMuscleGroup={setChosenMuscleGroup}
         />
         <ExerciseList
            exercises={currentExercises}
            chosenMuscleGroup={chosenMuscleGroup}
         />
         <Paginate
            pageCount={pageCount}
            handlePageClick={handlePageClick}
            currentPage={currentPage}
         />

      </div>
   )
};


