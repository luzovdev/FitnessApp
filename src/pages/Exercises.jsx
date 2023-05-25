import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase/firebase-config";

import styles from './styles/exercises.module.scss';

import { InfoExercisesPage } from "../components/Exercises/infoExercisesPage";
import { SearchExercises } from "../components/Exercises/serchExercise";
import { MuscleGroupsList } from "../components/Exercises/muscleGroupsList";
import { ExerciseList } from "../components/Exercises/exerciseList";
import { Paginate } from "../components/UI/paginate";

import { selectExercisesItems, getExercises, getExercisesBySelectedMuscleGroup } from "../redux/slices/exercises";
import { selectDateValue } from "../redux/slices/date";




export const Exercises = () => {
   const exercises = useSelector(selectExercisesItems);
   const date = useSelector(selectDateValue);
   const dispatch = useDispatch();

   const scheduledExercisesCollectionRef = doc(db, 'scheduledExercises', `${date}`);

   const [chosenMuscleGroup, setChosenMuscleGroup] = useState('all');
   const [itemOffset, setItemOffset] = useState(0);
   const [currentPage, setCurrentPage] = useState(0);
   const exercisesPerPage = 10;
   const endOffset = itemOffset + exercisesPerPage;
   const currentExercises = exercises?.slice(itemOffset, endOffset);
   const pageCount = Math.ceil(exercises?.length / exercisesPerPage);

   const handlerPageClick = (event) => {
      setCurrentPage(event.selected)
      const newOffset = (event.selected * exercisesPerPage) % exercises.length;
      setItemOffset(newOffset);
   };

   const handlerAddExercise = async (exId, exName, exGif) => {
      await updateDoc(scheduledExercisesCollectionRef, {
         exercises: arrayUnion({
            id: exId,
            name: exName,
            gifUrl: exGif,
            completed: false,
            powerIndicators: []
         })
      })
   };

   useEffect(() => {
      if (chosenMuscleGroup === "all") {
         dispatch(getExercises());
      } else {
         setItemOffset(0)
         setCurrentPage(0)
         dispatch(getExercisesBySelectedMuscleGroup(chosenMuscleGroup));
      }
   }, [chosenMuscleGroup, dispatch]);

   return (
      <div className={styles.container}>
         <InfoExercisesPage />
         <SearchExercises />
         <MuscleGroupsList
            chosenMuscleGroup={chosenMuscleGroup}
            setChosenMuscleGroup={setChosenMuscleGroup}
         />
         <ExerciseList
            exercises={currentExercises}
            handlerAddExercise={handlerAddExercise}
         />
         <Paginate
            pageCount={pageCount}
            handlerPageClick={handlerPageClick}
            currentPage={currentPage}
         />
      </div>
   )
};


