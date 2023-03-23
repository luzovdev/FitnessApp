import React from "react";
import styles from './index.module.scss'
export const ExerciseVideos = ({ name, exerciseVideos }) => {

   return (
      <div className={styles.videos}>
         <h2 className={styles.videos__title}>Watch <span>{name}</span> exersice videos</h2>
         <div className={styles.videos__list}>
            {exerciseVideos?.slice(0, 4).map((item, index) => (
               <>
                  <a
                     href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                     key={index}
                     target="_blank"
                     className={styles.videos__item}
                  >
                     <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                     <p className={styles.videos__nameVideo}>
                        {item.video.title}
                     </p>
                     <p className={styles.videos__nameChannel}>
                        {item.video.channelName}
                     </p>
                  </a>

               </>
            ))}
         </div>
      </div >
   )
}