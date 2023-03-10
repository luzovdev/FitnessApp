import React from "react";
import styles from "./index.module.scss"
import mainBg from "../../assets/images/mainBg.png"
export const MainBlock = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.trigger}>
            <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel at eius, in architecto doloribus corrupti, accusamus tenetur repellat praesentium saepe natus provident id eum alias?</p>
            <button className={styles.btn}>Let`s start!</button>
         </div>
         <div className={styles.image}>
            <img src={mainBg} alt="fitness" />
         </div>
      </div>
   )
}