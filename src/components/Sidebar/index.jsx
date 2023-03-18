import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./index.module.scss";

import logo from "../../assets/images/logo.png";
import exercises from "../../assets/images/icons/exercising.png";
import calculator from "../../assets/images/icons/calories-calculator.png";
import calendar from "../../assets/images/icons/calendar.png"


export const Sidebar = () => {

   const activeClassName = ({ isActive }) => isActive ? styles.active : styles.icon;

   return (
      <>
         <div className={styles.wrapper}>
            <NavLink to='/' className={styles.logo}><img src={logo} alt="logo" /></NavLink>
            <nav className={styles.navWrapper}>
               <NavLink to='/exercises' className={activeClassName}><img src={exercises} alt="ixercises" /></NavLink>
               <NavLink to='/calc' className={activeClassName}><img src={calculator} alt="calculator" /></NavLink>
               <NavLink to='/calendar' className={activeClassName}><img src={calendar} alt="calendar" /></NavLink>
            </nav>
         </div>
         <Outlet />
      </>

   )
} 