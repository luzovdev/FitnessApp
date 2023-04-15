import React from "react";
import styles from "./index.module.scss"
export const AddExerciseButton = ({ handlerAddExercise, id, name, gifUrl, isAdded }) => {
   return (
      <button
         className={isAdded ? styles.btn__added : styles.btn}
         onClick={() => handlerAddExercise(id, name, gifUrl)}
      >{isAdded ? '✔' : '+'}</button>
   )
};
