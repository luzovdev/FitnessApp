import React from 'react';
import styles from './index.module.scss'
import bicepsImg from '../../assets/images/muscleGroup/biceps.png'

export const MuscleGroup = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.muscleImg}>
            <img src={bicepsImg} alt="biceps" />
         </div>
         <div>
            Biceps
         </div>
      </div>
   )
};

