import React from "react";
import styles from './index.module.scss';
export const Detail = ({ exerciseDetail }) => {



   const { bodyPart, gifUrl, name, target } = exerciseDetail;
   return (
      <div className={styles.detail}>
         <div className={styles.detail__image}>
            <img src={gifUrl} alt={name} />
         </div>
         <div className={styles.detail__description} >
            <div className={styles.detail__title}>
               <h2>{name}</h2>
            </div>
            <p className={styles.detail__text}>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis perferendis magnam obcaecati at. Omnis natus modi dignissimos, consequuntur cumque eligendi quas doloremque numquam, assumenda non facere! Quisquam ipsam debitis fugit non in, accusamus nihil odio dolorum quod exercitationem, quos distinctio. Fugit quidem repudiandae ullam reprehenderit veniam tempora? Modi, nam ullam?
            </p>
            <p className={styles.detail__muscle}>
               <span>Target : {target} </span>
               <span>Bodypart : {bodyPart}</span>
            </p>
         </div>
      </div>
   )
};