import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import { fetchData, exerciseOptions } from '../../utils/fetchData';

import Slider from 'react-slick';
import './muscleGroupsSlider.scss'




import { MuscleGroupItem } from '../muscleGroupItem';

export const MuscleGroupsList = ({ chosenMuscleGroup, setChosenMuscleGroup }) => {
   // const [muscleGroups, setMuscleGroups] = useState([]);

   // useEffect(() => {
   //    const fetchMuscleGroups = async () => {
   //       const muscleGroupsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
   //       setMuscleGroups(['all', ...muscleGroupsData])
   //    }

   //    fetchMuscleGroups();
   // }, []);

   const muscleGroups = ["all", "back", "cardio", "chest", "lower arms", "lower legs", "neck", "shoulders", "upper arms", "upper legs", "waist"];
   const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      className: 'muscleGroupsSlider',
      responsive: [
         {
            breakpoint: 991.98,
            settings: {
               arrows: false
            }
         },
         {
            breakpoint: 767.98,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               arrows: false
            }
         },
         {
            breakpoint: 570,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               arrows: false
            }
         },
         {
            breakpoint: 479.98,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false
            }
         }
      ]
   };
   return (
      <div className={styles.wrapper} >
         <Slider {...sliderSettings}>
            {muscleGroups.map((muscleGroup) => (<MuscleGroupItem muscleGroup={muscleGroup}
               chosenMuscleGroup={chosenMuscleGroup}
               setChosenMuscleGroup={setChosenMuscleGroup}
               key={muscleGroup.id || muscleGroup}
            />))}
         </Slider>
      </div>

   )
};

