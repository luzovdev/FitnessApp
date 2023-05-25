import React, { useState } from "react";
import styles from './index.module.scss';

import { useDispatch } from "react-redux";
import { addPowerIndicators } from "../../../redux/slices/scheduledExercises";

import tick from '../../../assets/images/icons/tick.png';


export const InputOfPowerIndicators = ({ id }) => {

   const [weight, setWeight] = useState('');
   const [replays, setReplays] = useState('');

   const dispatch = useDispatch();

   const addPowerIndicatorsHandler = (id) => {
      const indicators = {
         weightIndicator: weight,
         replaysIndicator: replays
      }
      dispatch(addPowerIndicators({ id, indicators }))
   }

   return (
      <div className={styles.wrapper}>
         <div className={styles.inputs}>
            <input
               type="text"
               placeholder="Weight"
               onChange={(e) => setWeight(e.target.value)}
               value={weight}
            />
            <input
               type="text"
               placeholder="Replays"
               onChange={(e) => setReplays(e.target.value)}
               value={replays}
            />
         </div>
         <button
            className={styles.btn}
            onClick={() => addPowerIndicatorsHandler(id)}
         >
            <img src={tick} alt="tick" />
         </button>
      </div>
   )
}