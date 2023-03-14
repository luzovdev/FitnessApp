import React, { useState } from 'react';
import styles from './index.module.scss';

import { SearchButton } from '../searchButton';
import { SearchExerciseInput } from '../searchExerciseInput';

import { fetchData, exerciseOptions } from '../../utils/fetchData';

export const SearchExercises = ({ setExercises }) => {
   const [search, setSearch] = useState('');
   const handleSearch = async () => {
      if (search) {
         //написать loading в значении true
         const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
         const searchedExercises = exercisesData.filter((exercise) => {
            return exercise.target.toLowerCase().includes(search) ||
               exercise.bodyPart.toLowerCase().includes(search) ||
               exercise.equipment.toLowerCase().includes(search)
         });
         setSearch('');
         setExercises(searchedExercises);

         //написать loading в значении false
      }
   };

   return (
      <div className={styles.wrapper}>
         <SearchExerciseInput search={search} setSearch={setSearch} />
         <SearchButton handleSearch={handleSearch} />
      </div>
   )
};

