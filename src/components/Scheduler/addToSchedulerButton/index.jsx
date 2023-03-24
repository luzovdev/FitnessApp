import React from "react";
import styles from './index.module.scss';
import { NavLink } from "react-router-dom";
export const AddToSchedulerButton = () => <NavLink to='/exercises'><button className={styles.button}>+</button></NavLink> 