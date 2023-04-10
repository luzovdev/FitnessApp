import React from 'react';
import styles from './index.module.scss'
import { Link } from 'react-router-dom';

import { AddExerciseButton } from '../addExerciseButton';

import { setScheduledExercises } from '../../../redux/slices/scheduledExercises';
import { toggleIsAdded } from '../../../redux/slices/exercises'

import { useDispatch } from 'react-redux';

export const ExerciseCard = ({ bodyPart, name, gifUrl, target, id, isAdded }) => {


   const dispatch = useDispatch();
   // console.log('Render Card Exercises');

   const handleAddExercise = () => {
      const scheduleExercise = {
         id: id,
         name: name,
         gifUrl: gifUrl,
         completed: false,
         powerIndicators: []
      }
      dispatch(setScheduledExercises(scheduleExercise))
      dispatch(toggleIsAdded(id))
   };


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
            handleAddExercise={handleAddExercise}
            isAdded={isAdded}
         />
      </div>
   )
};

