import React, { useEffect } from "react";
import styles from "./index.module.scss";

import { ExerciseCard } from "../exerciseСard";
import { fetchData, exerciseOptions } from "../../utils/fetchData";

export const ExerciseList = ({ exercises, chosenMuscleGroup, setExercises }) => {

   useEffect(() => {
      const fetchExerciseData = async () => {
         let exerciseData = [];
         if (chosenMuscleGroup === "all") {
            exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
         } else {
            exerciseData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${chosenMuscleGroup}`, exerciseOptions)
         }
         setExercises(exerciseData);
      };

      fetchExerciseData();
   }, [chosenMuscleGroup]);

   return (
      <div className={styles.wrapper}>
         {exercises.map((exerciseItem) => <ExerciseCard {...exerciseItem} key={exerciseItem.id} />)}
      </div>
   )
};