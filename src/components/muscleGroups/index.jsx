import React from 'react';
import styles from './index.module.scss';

import { MuscleGroup } from '../muscleGroup';

export const MuscleGroups = () => {
   return (
      <div className={styles.wrapper}>
         <MuscleGroup />
         <MuscleGroup />
         <MuscleGroup />
         <MuscleGroup />
         <MuscleGroup />
         <MuscleGroup />
      </div>
   )
};

