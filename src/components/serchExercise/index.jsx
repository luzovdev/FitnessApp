import React from 'react';
import styles from './index.module.scss';

import searchIcon from '../../assets/images/icons/search.svg';


export const SearchExercise = () => {
   return (
      <div className={styles.wrapper}>
         <input className={styles.input} type="text" />
         <button className={styles.btn}><img src={searchIcon} alt="search" /></button>
      </div>
   )
}

