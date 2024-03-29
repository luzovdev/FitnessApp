import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import styles from './styles/scheduler.module.scss';

import { changeDate } from "../redux/slices/date";
import { setScheduledExercises } from '../redux/slices/scheduledExercises';

import { ScheduledExercisesList } from "../components/Scheduler/scheduledExercisesList";
import { AddToSchedulerButton } from "../components/Scheduler/addToSchedulerButton";


import Calendar from 'react-calendar';
import './styles/calendar.scss'

import { db } from '../firebase/firebase-config';
import { setDoc, doc, getDoc, updateDoc, arrayRemove, onSnapshot, collection, getDocs } from "firebase/firestore";


export const Scheduler = () => {
   const dispatch = useDispatch();
   const [date, setDate] = useState(new Date());
   const [scheduledDates, setScheduledDates] = useState([]);
   const scheduledExercisesRef = doc(db, 'scheduledExercises', `${date.toDateString()}`);

   const scheduleTraining = async () => {
      const exerciseSnap = await getDoc(scheduledExercisesRef);
      if (exerciseSnap.data() === undefined) {
         await setDoc(scheduledExercisesRef, { exercises: [] });
      } else {
         return
      }
   };

   const removeExerciseHandler = async (itemId, itemName, itemGifUrl, itemCompleted, itemPowerIndicators) => {
      await updateDoc(scheduledExercisesRef, {
         exercises: arrayRemove({
            id: itemId,
            name: itemName,
            gifUrl: itemGifUrl,
            completed: itemCompleted,
            powerIndicators: itemPowerIndicators
         })
      })
   };

   const highlightScheduledDate = (dateEl) => {
      const foundEl = scheduledDates?.find((scheduledDate) => scheduledDate === dateEl.toDateString());
      return foundEl ? 'react-calendar__tile--scheduled' : ''
   }


   useEffect(() => {
      const getSelectDays = async () => {
         let datesArr = [];
         const querySnapshot = await getDocs(collection(db, "scheduledExercises"));
         querySnapshot.forEach((doc) => {
            datesArr.push(doc.id)
         })
         setScheduledDates(datesArr)
      };
      getSelectDays();
   }, [date])


   useEffect(() => {
      dispatch(changeDate(date.toDateString()))
      onSnapshot(scheduledExercisesRef, (scheduledExercisesDoc) => {
         dispatch(setScheduledExercises(scheduledExercisesDoc.data()))
      })
   }, [date, dispatch])




   return (
      <div className={styles.container}>
         <div className={styles.description}>
            <h2 className={styles.description__title}>Scheduler</h2>
            <p className={styles.description__text}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde repellat tempora odio blanditiis voluptatibus at repellendus pariatur, iste ad nostrum libero quidem enim tenetur doloribus. Sit tempora blanditiis temporibus provident?</p>
         </div>
         <Calendar
            onChange={setDate}
            value={date}
            locale={"en-EN"}
            tileClassName={({ date }) => highlightScheduledDate(date)}
         />
         <ScheduledExercisesList
            removeExerciseHandler={removeExerciseHandler}
         />
         <AddToSchedulerButton
            scheduleTraining={scheduleTraining}
         />
      </div>
   )
}

