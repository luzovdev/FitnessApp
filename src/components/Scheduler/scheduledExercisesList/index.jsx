import React from "react";
import styles from './index.module.scss'
import { ScheduledExercisesItem } from "../scheduledExercisesItem";
import { useSelector } from "react-redux";
import { selectScheduledExercisesItem } from "../../../redux/slices/scheduledExercises";

export const ScheduledExercisesList = () => {
   const scheduledExercises = useSelector(selectScheduledExercisesItem);
   return (
      <div className={styles.wrapper}>
         {scheduledExercises.map((item) => <ScheduledExercisesItem {...item} key={item.id} />)}
      </div>
   )
}