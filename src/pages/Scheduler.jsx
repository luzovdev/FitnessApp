import React, { useState } from "react";
import './styles/container.scss'
import styles from './styles/scheduler.module.scss'
import 'react-calendar/dist/Calendar.css';

import Calendar from "react-calendar";
import { ScheduledExercisesList } from "../components/Scheduler/scheduledExercisesList";
import { AddToSchedulerButton } from "../components/Scheduler/addToSchedulerButton";

export const Scheduler = () => {
   console.log('Render Scheduler Component')
   const [date, setDate] = useState(new Date());

   return (
      <div className="container">
         <div className={styles.description}>
            <h2 className={styles.description__title}>Scheduler</h2>
            <p className={styles.description__text}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde repellat tempora odio blanditiis voluptatibus at repellendus pariatur, iste ad nostrum libero quidem enim tenetur doloribus. Sit tempora blanditiis temporibus provident?</p>
         </div>
         <Calendar onChange={setDate} value={date} />
         <ScheduledExercisesList />
         <AddToSchedulerButton />
      </div>
   )
}