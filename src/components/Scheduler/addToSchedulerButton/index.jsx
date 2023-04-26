import React from "react";
import styles from './index.module.scss';
import { NavLink } from "react-router-dom";

export const AddToSchedulerButton = ({ scheduleTraining }) => <NavLink to='/exercises'><button onClick={() => scheduleTraining()} className={styles.button}>+</button></NavLink> 