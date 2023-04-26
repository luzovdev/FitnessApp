import React from "react";
import { useSelector } from "react-redux";
import styles from './index.module.scss'

import { ScheduledExercisesItem } from "../scheduledExercisesItem";

import { selectScheduledExercisesItem } from "../../../redux/slices/scheduledExercises";

export const ScheduledExercisesList = ({ removeExerciseHandler }) => {
   const exercises = useSelector(selectScheduledExercisesItem);

   return (
      <div className={styles.wrapper}>
         {exercises?.map((item) => <ScheduledExercisesItem {...item} removeExerciseHandler={removeExerciseHandler} key={item.id} />)}
      </div>
   )
}