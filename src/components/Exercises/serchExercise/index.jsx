import React, { useState } from 'react';
import styles from './index.module.scss';

import { SearchButton } from '../searchButton';
import { SearchExerciseInput } from '../searchExerciseInput';

import { useDispatch, useSelector } from 'react-redux';
import { selectExercisesItems, setExercises } from '../../../redux/slices/exercises';


export const SearchExercises = () => {
   const [search, setSearch] = useState('');
   const exercises = useSelector(selectExercisesItems);
   const dispatch = useDispatch();

   const getSearch = () => {
      if (search) {
         const searchedExercises = exercises?.filter((exercise) => {
            return exercise.target.toLowerCase().includes(search) ||
               exercise.bodyPart.toLowerCase().includes(search) ||
               exercise.equipment.toLowerCase().includes(search)
         });
         setSearch('');
         dispatch(setExercises(searchedExercises));
      }
   };

   const handleSearchButton = () => {
      getSearch()
   };

   const handleSerchInput = (event) => {
      if (event.key === 'Enter') {
         getSearch()
      }
   }



   return (
      <div className={styles.wrapper}>
         <SearchExerciseInput search={search} setSearch={setSearch} handleSerchInput={handleSerchInput} />
         <SearchButton handleSearchButton={handleSearchButton} />
      </div>
   )
};

