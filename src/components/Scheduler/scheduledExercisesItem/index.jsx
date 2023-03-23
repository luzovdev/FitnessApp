import React, { useState } from "react";
import styles from "./index.module.scss";

import editIcon from '../../../assets/images/icons/pencil.png';
import removeIcon from '../../../assets/images/icons/remove.png';
import compileIcon from '../../../assets/images/icons/tick.png'

import { InputOfPowerIndicators } from "../inputOfPowerIndicators";
import { PowerIndicators } from "../powerIndicators";

export const ScheduledExercisesItem = ({ gifUrl, name, bodyPart, id, removeScheduledExercises }) => {

   const [isEdit, setIsEdit] = useState(false);



   return (
      <div className={styles.wrapper}>
         <div className={styles.top}>
            <div className={styles.image}>
               <img src={gifUrl} alt={name} />
            </div>
            <div>
               <p>{bodyPart}</p>
               <p>{name}</p>
            </div>
            <button className={styles.icon}>
               <img src={removeIcon} alt="compileIcon" />
            </button>
            <button onClick={() => removeScheduledExercises(id)} className={styles.icon}>
               <img src={compileIcon} alt="removeIcon" />
            </button>
            <button className={styles.icon} onClick={() => setIsEdit(!isEdit)}>
               <img src={editIcon} alt="editIcon" />
            </button>

         </div>
         <PowerIndicators />
         {isEdit && <InputOfPowerIndicators />}
      </div >
   )
}



