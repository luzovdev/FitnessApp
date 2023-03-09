import React from 'react';
import styles from './index.module.scss'

import muscleGroupIcon from '../../assets/images/muscleGroupIcon.png'
export const MuscleGroup = () => {

   return (
      <div className={styles.wrapper}>
         <div className={styles.muscleImg}>
            <img src={muscleGroupIcon} alt='Бицепс' />
         </div>
         <div>
            Бицепс
         </div>
      </div>
   )
};

