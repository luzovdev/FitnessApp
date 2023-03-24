import React, { useEffect } from "react";
import styles from './styles/exerciseDetail.module.scss'
import { useParams, useNavigate } from "react-router-dom";


import { Detail } from "../components/ExerciseDetail/detail";
import { ExerciseVideos } from "../components/ExerciseDetail/exerciseVideos";

import { useSelector, useDispatch } from "react-redux";
import { getExerciseDetail, selectExersiceDetailItem, selectExersiceVideosItems, selectIsLoading } from "../redux/slices/exerciseDetail";

import { Preloader } from "../components/preloader";



export const ExerciseDetail = () => {

   const navigate = useNavigate();
   const goBack = () => {
      navigate(-1);
   }

   const { id } = useParams();
   const dispatch = useDispatch();
   const exerciseDetail = useSelector(selectExersiceDetailItem);
   const exerciseVideos = useSelector(selectExersiceVideosItems);
   const isLoading = useSelector(selectIsLoading);

   useEffect(() => {
      dispatch(getExerciseDetail(id))
   }, [id])

   const shouldShowDetail = exerciseDetail && !isLoading;

   return (
      <div className={styles.container}>
         <button onClick={goBack} className={styles.back} >
            back
         </button>
         {shouldShowDetail && <Detail exerciseDetail={exerciseDetail} />}
         {shouldShowDetail && <ExerciseVideos name={exerciseDetail.name} exerciseVideos={exerciseVideos} />}
         {isLoading && <Preloader />}
      </div>
   )
}







