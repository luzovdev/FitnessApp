import React from "react";
import styles from './index.module.scss'

export const SearchExerciseInput = ({ search, setSearch, handleSerchInput }) => {
   return (
      <input className={styles.input} type="text"
         value={search}
         onChange={(e) => { setSearch(e.target.value.toLowerCase()) }}
         onKeyDown={(e) => handleSerchInput(e)}
      />
   )
}