import React from "react";
import styles from "./index.module.scss";

import { ExerciseCard } from "../exerciseСard";
import { Preloader } from "../../UI/preloader";

import { useSelector } from "react-redux";
import { selectIsLoading } from "../../../redux/slices/exercises";

export const ExerciseList = ({ exercises, handlerAddExercise }) => {
   const isLoading = useSelector(selectIsLoading);
   const shouldShowExercise = exercises && !isLoading;


   return (
      <div className={styles.wrapper}>
         {shouldShowExercise && exercises?.map((exerciseItem) => <ExerciseCard {...exerciseItem} handlerAddExercise={handlerAddExercise} key={exerciseItem.id} />)}
         {isLoading && <Preloader />}
      </div>
   )
};