import React, { useEffect } from "react";
import styles from "./index.module.scss";

import { ExerciseCard } from "../exerciseСard";

import { useDispatch } from "react-redux";
import { getExercises, getExercisesBySelectedMuscleGroup } from "../../../redux/slices/exercises";

export const ExerciseList = ({ chosenMuscleGroup, exercises }) => {

   const dispatch = useDispatch();

   useEffect(() => {
      if (chosenMuscleGroup === "all") {
         dispatch(getExercises());
      } else {
         dispatch(getExercisesBySelectedMuscleGroup(chosenMuscleGroup));
      }
   }, [chosenMuscleGroup]);

   return (
      <div className={styles.wrapper}>
         {exercises?.map((exerciseItem) => <ExerciseCard {...exerciseItem} key={exerciseItem.id} />)}
      </div>
   )
};