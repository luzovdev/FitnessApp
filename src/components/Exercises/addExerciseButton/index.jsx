import React from "react";
import styles from "./index.module.scss"
export const AddExerciseButton = ({ handleAddExercise, isAdded }) => {


   return (
      <button
         className={isAdded ? styles.btn__added : styles.btn}
         onClick={() => handleAddExercise()}
      >{isAdded ? '✔' : '+'}</button>

   )
};

