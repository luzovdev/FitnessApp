import React from "react";
import styles from './index.module.scss'
import { ScheduledExercisesItem } from "../scheduledExercisesItem";
import { useSelector, useDispatch } from "react-redux";
import { selectScheduledExercisesItem, removeScheduledExercises } from "../../../redux/slices/scheduledExercises";

export const ScheduledExercisesList = () => {
   const dispatch = useDispatch();
   const scheduledExercises = useSelector(selectScheduledExercisesItem);

   const removeScheduledExercises = (itemId) => {
      dispatch(removeScheduledExercises(itemId))
   };

   return (
      <div className={styles.wrapper}>
         {scheduledExercises.map((item) => <ScheduledExercisesItem {...item} key={item.id} removeScheduledExercises={removeScheduledExercises} />)}
      </div>
   )
}