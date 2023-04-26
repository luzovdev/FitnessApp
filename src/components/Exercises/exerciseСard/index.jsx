import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.scss'

import { AddExerciseButton } from '../addExerciseButton';



export const ExerciseCard = ({ bodyPart, name, gifUrl, target, id, handlerAddExercise }) => {

   const [isAdded, setIsAdded] = useState(false);

   return (
      <div className={styles.card}>
         <Link to={`/exercise/${id}`} className={styles.wrapper} >
            <div className={styles.image}>
               <img src={gifUrl} alt={bodyPart} />
               <div className={styles.info}>
                  <div className={styles.infoItem}>
                     {target}
                  </div>
                  <div className={styles.infoItem}>
                     {bodyPart}
                  </div>
               </div>
            </div>
            <div className={styles.name}>
               {name}
            </div>
         </Link >
         <AddExerciseButton
            handlerAddExercise={handlerAddExercise}
            id={id}
            name={name}
            gifUrl={gifUrl}
            setIsAdded={setIsAdded}
            isAdded={isAdded}
         />
      </div>
   )
};

