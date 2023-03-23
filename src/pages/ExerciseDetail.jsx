import React, { useEffect } from "react";
import styles from './styles/exerciseDetail.module.scss'
import { useParams, NavLink } from "react-router-dom";


import { Detail } from "../components/ExerciseDetail/detail";
import { ExerciseVideos } from "../components/ExerciseDetail/exerciseVideos";

import { useSelector, useDispatch } from "react-redux";
import { getExerciseDetail, selectExersiceDetailItem, selectExersiceVideosItems, selectIsLoading, selectError } from "../redux/slices/exerciseDetail";

import { Preloader } from "../components/preloader";



export const ExerciseDetail = () => {

   const { id } = useParams();
   const dispatch = useDispatch();
   const exerciseDetail = useSelector(selectExersiceDetailItem);
   const exerciseVideos = useSelector(selectExersiceVideosItems);
   const isLoading = useSelector(selectIsLoading);
   // const error = useSelector(selectError);

   useEffect(() => {
      dispatch(getExerciseDetail(id))
   }, [id])

   const shouldShowExerciseDetail = exerciseDetail && !isLoading;

   return (
      <div className={styles.container}>
         <NavLink className={styles.back} to='/exercises'>
            back
         </NavLink>
         {shouldShowExerciseDetail && <Detail exerciseDetail={exerciseDetail} />}
         {shouldShowExerciseDetail && <ExerciseVideos name={exerciseDetail.name} exerciseVideos={exerciseVideos} />}
         {isLoading && <Preloader />}
         {/* {error && <h1>{error}</h1>} */}
      </div>
   )
}







