import React from 'react';
import styles from './index.module.scss'
import { Link } from 'react-router-dom';
export const ExerciseCard = ({ bodyPart, name, gifUrl, target, id }) => {

   return (
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
   )
};

