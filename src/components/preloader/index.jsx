import React from "react";
import styles from "./index.module.scss";
import preloader from "../../assets/images/icons/preloader.gif"

export const Preloader = () => {
   return (
      <div className={styles.wrapper}>
         <img src={preloader} alt="preloader" />
      </div>
   )
}