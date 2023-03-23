import React from "react";
import styles from "./index.module.scss"
export const AddExerciseButton = ({ handleAddExercise, id }) => {


   return (
      <button
         className={styles.btn}
         onClick={() => handleAddExercise(id)}
      >+</button>
   )
}