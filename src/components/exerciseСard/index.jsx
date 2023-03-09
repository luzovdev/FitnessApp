import React from 'react';
import styles from './index.module.scss'
import patrick from '../../assets/images/patrick.jpg'
export const ExerciseCard = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.image}>
            <img src={patrick} alt="patrick" />
            <div className={styles.targetMuscle}>
               <span>targer muscle</span>
            </div>
         </div>
         <div className={styles.name}>
            name of exercise
         </div>
      </div>
   )
};

