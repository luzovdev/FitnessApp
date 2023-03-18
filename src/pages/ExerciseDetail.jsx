import React, { useState, useEffect } from "react";
import styles from './styles/exerciseDetail.module.scss'
import { useParams, Link } from "react-router-dom";

import { fetchData, exerciseOptions, exerciseVideosOptions } from '../utils/fetchData';

import { Detail } from "../components/detail";
import { ExerciseVideos } from "../components/exerciseVideos";
import { SimilarExercises } from "../components/similarExercise";

// const wrapperForDetailPage = {
//    minHeight: '100%',
//    overflow: 'hidden',
//    maxWidth: '1440px',
//    margin: '0 auto',
// };



export const ExerciseDetail = () => {

   const [exerciseDetail, setExerciseDetail] = useState({});
   const [exerciseVideos, setExerciseVideos] = useState([]);
   const [similarExercise, setSimilarExercises] = useState([]);
   const { id } = useParams();

   useEffect(() => {
      const fetchExercisesData = async () => {
         const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
         const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

         const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
         setExerciseDetail(exerciseDetailData);

         const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, exerciseVideosOptions);
         setExerciseVideos(exerciseVideosData.contents);

         const targetExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exerciseOptions);
         setSimilarExercises(targetExercisesData);
      }
      fetchExercisesData();
   }, [id])



   return (
      <div className={styles.wrapper}>
         <Link className={styles.back} to='/exercises'>
            back
         </Link>
         <Detail exerciseDetail={exerciseDetail} />
         <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
         {/* <SimilarExercises similarExercise={similarExercise} target={exerciseDetail.target} /> */}
      </div>
   )
}