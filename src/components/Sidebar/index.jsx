import React from "react";
import styles from "./index.module.scss";

import logo from "../../assets/images/logo.png";
import ixercises from "../../assets/images/icons/exercising.png";
import calculator from "../../assets/images/icons/calories-calculator.png";
import calendar from "../../assets/images/icons/calendar.png"


export const Sidebar = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.logo}><img src={logo} alt="logo" /></div>
         <nav className={styles.navWrapper}>
            <div className={styles.icon}><img src={ixercises} alt="ixercises" /></div>
            <div className={styles.icon}><img src={calculator} alt="calculator" /></div>
            <div className={styles.icon}><img src={calendar} alt="calendar" /></div>
         </nav>
      </div>
   )
} 