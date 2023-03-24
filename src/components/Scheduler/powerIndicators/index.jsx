import React from "react";
import styles from "./index.module.scss";
export const PowerIndicators = ({ powerIndicator, approaches }) => {
   const { replaysIndicator, weightIndicator } = powerIndicator;
   return (
      <div className={styles.results}>
         <div className={styles.results__items}>
            <div className={styles.results__item}>
               <p>{approaches}</p>
            </div>
            <div className={styles.results__item}>
               <p>{weightIndicator}</p>
            </div>
            <div className={styles.results__item}>
               <p>{replaysIndicator}</p>
            </div>
         </div>
      </div>
   )
}