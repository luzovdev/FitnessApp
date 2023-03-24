import React, { useEffect } from 'react';
import styles from './index.module.scss';


import Slider from 'react-slick';
import './muscleGroupsSlider.scss'

import { useSelector, useDispatch } from 'react-redux';
import { selectMuscleGroupsItems, getMuscleGroups } from "../../../redux/slices/exercises";

import { MuscleGroupItem } from '../muscleGroupItem';

import arrowRigth from '../../../assets/images/icons/right-arrow.png';
import arrowLeft from '../../../assets/images/icons/left-arrow.png';



export const MuscleGroupsList = ({ chosenMuscleGroup, setChosenMuscleGroup }) => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getMuscleGroups())
   }, []);

   const muscleGroups = useSelector(selectMuscleGroupsItems);

   const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      className: 'muscleGroupsSlider',
      nextArrow: <img src={arrowRigth} alt="next" />,
      prevArrow: <img src={arrowLeft} alt="prev" />,
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
            {muscleGroups?.map((muscleGroup) => (<MuscleGroupItem muscleGroup={muscleGroup}
               chosenMuscleGroup={chosenMuscleGroup}
               setChosenMuscleGroup={setChosenMuscleGroup}
               key={muscleGroup.id || muscleGroup}
            />))}
         </Slider>
      </div>

   )
};

