import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';

import { SearchButton } from '../searchButton';
import { SearchExerciseInput } from '../searchExerciseInput';

import { useDispatch, useSelector } from 'react-redux';
import { selectExercisesItems, setExercises } from '../../../redux/slices/exercises';


export const SearchExercises = () => {
   const [search, setSearch] = useState('');
   const exercises = useSelector(selectExercisesItems);
   const dispatch = useDispatch();

   const handleSearch = () => {
      if (search) {
         const searchedExercises = exercises?.filter((exercise) => {
            return exercise.target.toLowerCase().includes(search) ||
               exercise.bodyPart.toLowerCase().includes(search) ||
               exercise.equipment.toLowerCase().includes(search)
         });
         setSearch('');
         dispatch(setExercises(searchedExercises));
      }
   }

   return (
      <div className={styles.wrapper}>
         <SearchExerciseInput search={search} setSearch={setSearch} />
         <SearchButton handleSearch={handleSearch} />
      </div>
   )
};

