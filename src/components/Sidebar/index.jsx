import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

import logo from "../../assets/images/logo.png";
import exercises from "../../assets/images/icons/exercising.png";
import calculator from "../../assets/images/icons/calories-calculator.png";
import calendar from "../../assets/images/icons/calendar.png"


export const Sidebar = () => {
   return (
      <div className={styles.wrapper}>
         <Link to='/' className={styles.logo}><img src={logo} alt="logo" /></Link>
         <nav className={styles.navWrapper}>
            <Link to='/exercises' className={styles.icon}><img src={exercises} alt="ixercises" /></Link>
            <Link to='/calc' className={styles.icon}><img src={calculator} alt="calculator" /></Link>
            <Link to='/calendar' className={styles.icon}><img src={calendar} alt="calendar" /></Link>
         </nav>
      </div>
   )
} 