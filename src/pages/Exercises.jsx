import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import './styles/container.scss'

import { InfoExercisesPage } from "../components/Exercises/infoExercisesPage";
import { SearchExercises } from "../components/Exercises/serchExercise";
import { MuscleGroupsList } from "../components/Exercises/muscleGroupsList";
import { ExerciseList } from "../components/Exercises/exerciseList";
import { Paginate } from "../components/UI/paginate";

import { selectExercisesItems, getExercises, getExercisesBySelectedMuscleGroup } from "../redux/slices/exercises";
import { setScheduledExercises } from '../redux/slices/scheduledExercises';


import { collection, addDoc } from 'firebase/firestore';
import { db } from "../firebase/firebase.config";

export const Exercises = () => {

   const exercises = useSelector(selectExercisesItems);
   const dispatch = useDispatch();


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

   const handlerAddExercise = (exId, exName, exGif) => {
      const scheduleExercise = {
         id: exId,
         name: exName,
         gifUrl: exGif,
         completed: false,
         powerIndicators: []
      }
      dispatch(setScheduledExercises(scheduleExercise))
   };

   // const handlerAddExercise = async (exId, exName, exGif) => {
   //    try {
   //       const docRef = await addDoc(collection(db, "scheduledExercises"), {
   //          id: exId,
   //          name: exName,
   //          gifUrl: exGif,
   //          completed: false,
   //          powerIndicators: []
   //       });
   //    } catch (e) {
   //       console.error("Error adding document: ", e);
   //    }
   // };


   // import { collection, addDoc } from "firebase/firestore"; 

   // try {
   //   const docRef = await addDoc(collection(db, "users"), {
   //     first: "Ada",
   //     last: "Lovelace",
   //     born: 1815
   //   });
   //   console.log("Document written with ID: ", docRef.id);
   // } catch (e) {
   //   console.error("Error adding document: ", e);
   // }

   useEffect(() => {
      if (chosenMuscleGroup === "all") {
         dispatch(getExercises());
      } else {
         setItemOffset(0)
         setCurrentPage(0)
         dispatch(getExercisesBySelectedMuscleGroup(chosenMuscleGroup));
      }
   }, [chosenMuscleGroup]);


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


