import React, { useState } from 'react';
import styles from './index.module.scss';

import { SearchButton } from '../searchButton';
import { SearchExerciseInput } from '../searchExerciseInput';

import { fetchData, exerciseOptions } from '../../utils/fetchData';

export const SearchExercise = () => {
   const [search, setSearch] = useState('');
   const [exercise, setExercise] = useState([]);
   console.log(exercise);
   const handleSearch = async () => {
      if (search) {
         const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
         const searchedExercise = exerciseData.filter((exercise) => {
            return exercise.target.toLowerCase().includes(search) ||
               exercise.bodyPart.toLowerCase().includes(search)
         });

         setExercise(searchedExercise);
         setSearch('');
      }
   }

   return (
      <div className={styles.wrapper}>
         <SearchExerciseInput search={search} setSearch={setSearch} />
         <SearchButton handleSearch={handleSearch} />
      </div>
   )
}

