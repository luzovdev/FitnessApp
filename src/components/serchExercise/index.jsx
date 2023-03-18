import React, { useState } from 'react';
import styles from './index.module.scss';

import { SearchButton } from '../searchButton';
import { SearchExerciseInput } from '../searchExerciseInput';

// import { fetchData, exerciseOptions } from '../../utils/fetchData';
import { useDispatch, useSelector } from 'react-redux';
import { selectExercisesItems, setExercises } from '../../redux/slices/exercises';

export const SearchExercises = () => {
   const [search, setSearch] = useState('');
   const exercises = useSelector(selectExercisesItems);
   //Решить проблему с тем почему приходит null;
   console.log(exercises)
   const dispatch = useDispatch()
   const handleSearch = () => {
      if (search) {
         const searchedExercises = exercises.filter((exercise) => {
            return exercise.target.toLowercase().includes(search) ||
               exercise.bodyPart.toLowerCase().includes(search) ||
               exercise.equipment.toLowerCase().includes(search)
         });
         setSearch('');
         dispatch(setExercises(searchedExercises));
      }
   }


   // const handleSearch = async () => {
   //    if (search) {
   //       //написать loading в значении true
   //       const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
   //       const searchedExercises = exercisesData.filter((exercise) => {
   //          return exercise.target.toLowerCase().includes(search) ||
   //             exercise.bodyPart.toLowerCase().includes(search) ||
   //             exercise.equipment.toLowerCase().includes(search)
   //       });
   //       setSearch('');
   //       setExercises(searchedExercises);

   //       //написать loading в значении false
   //    }
   // };

   return (
      <div className={styles.wrapper}>
         <SearchExerciseInput search={search} setSearch={setSearch} />
         <SearchButton handleSearch={handleSearch} />
      </div>
   )
};

