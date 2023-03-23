import React, { useEffect } from 'react';
import styles from './index.module.scss'
import { Link } from 'react-router-dom';

import { AddExerciseButton } from '../addExerciseButton';

import { getScheduledExercises } from '../../../redux/slices/scheduledExercises';
import { useDispatch } from 'react-redux';

export const ExerciseCard = ({ bodyPart, name, gifUrl, target, id }) => {

   const dispatch = useDispatch();

   const handleAddExercise = (itemId) => {
      dispatch(getScheduledExercises(itemId))
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
         <AddExerciseButton handleAddExercise={handleAddExercise} id={id} />
      </div>
   )
};

