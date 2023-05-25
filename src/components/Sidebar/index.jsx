import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import styles from "./index.module.scss";

import logo from "../../assets/images/logo.png";
import calendar from "../../assets/images/icons/calendar.png"


export const Sidebar = () => {

   const activeClassName = ({ isActive }) => isActive ? styles.active : styles.icon;

   return (
      <>
         <div className={styles.wrapper}>
            <NavLink to='/' className={styles.logo}><img src={logo} alt="logo" /></NavLink>
            <nav className={styles.navWrapper}>
               <NavLink to='/scheduler' className={activeClassName}><img src={calendar} alt="scheduler" /></NavLink>
            </nav>
         </div>
         <Outlet />
      </>

   )
} 