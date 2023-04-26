import React, { useState } from "react";

import styles from "./index.module.scss";
import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { toggleСompletedScheduledExercise } from "../../../redux/slices/scheduledExercises";

import editIcon from '../../../assets/images/icons/pencil.png';
import removeIcon from '../../../assets/images/icons/remove.png';
import сompletedIcon from '../../../assets/images/icons/tick.png'

import { InputOfPowerIndicators } from "../inputOfPowerIndicators";
import { PowerIndicators } from "../powerIndicators";

export const ScheduledExercisesItem = ({ gifUrl, name, id, powerIndicators, completed, removeExerciseHandler }) => {

   const dispatch = useDispatch();
   const [isEdit, setIsEdit] = useState(false);


   const toggleExerciseCompletedHandler = (itemId) => {
      dispatch(toggleСompletedScheduledExercise(itemId))
   };


   return (
      <div className={completed ? styles.wrapper__completed : styles.wrapper}>
         <div className={styles.top}>
            <NavLink to={`/exercise/${id}`}>
               <div className={styles.image}>
                  <img src={gifUrl} alt={name} />
               </div>
            </NavLink>
            <div className={completed ? styles.name__completed : styles.name}>
               <p>{name}</p>
            </div>
            <div className={styles.controls}>
               <button
                  onClick={() => removeExerciseHandler(id, name, gifUrl, completed, powerIndicators)}
                  className={styles.icon}
               >
                  <img src={removeIcon} alt="removeIcon" />
               </button>
               <button
                  className={styles.icon}
                  onClick={() => toggleExerciseCompletedHandler(id)}
               >
                  <img src={сompletedIcon} alt="сompletedIcon" />
               </button>
               <button className={completed ? styles.icon__disabled : styles.icon} onClick={() => setIsEdit(!isEdit)}>
                  <img src={editIcon} alt="editIcon" />
               </button>
            </div>
         </div>
         <div className={styles.indicators}>
            <div className={styles.lables}>
               <span>Approaches</span>
               <span>Weight</span>
               <span>Replays</span>
            </div>
            {powerIndicators.map((powerIndicator, index) => {
               return <PowerIndicators powerIndicator={powerIndicator} approaches={index + 1} key={index} />
            })}
         </div>
         {isEdit && !completed ? <InputOfPowerIndicators id={id} /> : ''}
      </div >
   )
}



