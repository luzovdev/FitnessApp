import React from "react";
import styles from './index.module.scss'

export const SearchExerciseInput = ({ search, setSearch }) => {
   return (
      <input className={styles.input} type="text"
         value={search}
         onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
      />
   )
}