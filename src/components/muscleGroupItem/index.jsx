import React from 'react';
import styles from './index.module.scss'

import muscleGroupIcon from '../../assets/images/icons/muscleGroupIcon.png'
export const MuscleGroupItem = ({ muscleGroup, chosenMuscleGroup, setChosenMuscleGroup }) => {
   return (
      <div className={muscleGroup === chosenMuscleGroup ? styles.active : styles.wrapper}
         onClick={() => setChosenMuscleGroup(muscleGroup)}
      >
         <div className={styles.muscleImg}>
            <img src={muscleGroupIcon} alt={muscleGroup} />
         </div>
         <div className={styles.muscleName}>
            {muscleGroup}
         </div>
      </div>
   )
};

