import React, { useEffect } from "react";
import styles from "./index.module.scss";

import { ExerciseCard } from "../exerciseСard";
import { Preloader } from "../../UI/preloader";

import { useDispatch, useSelector } from "react-redux";
import { getExercises, getExercisesBySelectedMuscleGroup, selectIsLoading } from "../../../redux/slices/exercises";

export const ExerciseList = ({ chosenMuscleGroup, exercises }) => {
   console.log(exercises);
   const dispatch = useDispatch();
   const isLoading = useSelector(selectIsLoading);

   const shouldShowExercise = exercises && !isLoading;

   useEffect(() => {
      if (chosenMuscleGroup === "all") {
         dispatch(getExercises());
      } else {
         dispatch(getExercisesBySelectedMuscleGroup(chosenMuscleGroup));
      }
   }, [chosenMuscleGroup]);

   return (
      <div className={styles.wrapper}>
         {shouldShowExercise && exercises?.map((exerciseItem) => <ExerciseCard {...exerciseItem} key={exerciseItem.id} />)}
         {isLoading && <Preloader />}
      </div>
   )
};