import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/notFound.module.scss'

export const NotFound = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.numError}>404</div>
         <div className={styles.text}>Page not found</div>
         <Link to="/" className={styles.btn}>Go to main page</Link>
      </div>
   )
}

