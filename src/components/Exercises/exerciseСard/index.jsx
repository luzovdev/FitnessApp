import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from './index.module.scss'

import { AddExerciseButton } from '../addExerciseButton';

import { selectScheduledExercisesItem } from '../../../redux/slices/scheduledExercises';



export const ExerciseCard = ({ bodyPart, name, gifUrl, target, id, handlerAddExercise }) => {

   const scheduledExercises = useSelector(selectScheduledExercisesItem);
   const [isAdded, setIsAdded] = useState(false);


   useEffect(() => {
      const addedExercise = scheduledExercises.find((exercises) => exercises.id === id);
      if (addedExercise) {
         setIsAdded(true)
      } else {
         setIsAdded(false)
      }
   }, [scheduledExercises])

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
            isAdded={isAdded}
         />
      </div>
   )
};

