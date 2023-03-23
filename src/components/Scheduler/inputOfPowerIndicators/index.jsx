import React from "react";
import styles from './index.module.scss'

import tick from '../../../assets/images/icons/tick.png'
export const InputOfPowerIndicators = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.inputs}>
            <input type="text" placeholder="Weight" />
            <input type="text" placeholder="Replays" />
         </div>
         <button className={styles.btn}>
            <img src={tick} alt="tick" />
         </button>
      </div>
   )
}