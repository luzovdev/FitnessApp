import React from "react";
import styles from "./index.module.scss"
export const PowerIndicators = () => {
   return (
      <div className={styles.results}>
         <div className={styles.results__items}>
            <div className={styles.results__item}>
               <p className={styles.results__name}> подход</p>
               <p>12</p>
               <p>12</p>
               <p>12</p>
            </div>
            <div className={styles.results__item}>
               <p className={styles.results__name}>вес</p>
               <p>12</p>
               <p>12</p>
               <p>12</p>
            </div>
            <div className={styles.results__item}>
               <p className={styles.results__name}>повторы</p>
               <p>12</p>
               <p>12</p>
               <p>12</p>
            </div>
         </div>
      </div>
   )
}