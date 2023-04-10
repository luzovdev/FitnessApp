import React from "react";
import { Link } from "react-router-dom";
import styles from './styles/home.module.scss';
import mainBg from "../assets/images/mainBg.png";

export const Home = () => {
   return (
      <main >
         <div className={styles.wrapper}>
            <div className={styles.trigger}>
               <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel at eius, in architecto doloribus corrupti, accusamus tenetur repellat praesentium saepe natus provident id eum alias?</p>
               <Link to='/scheduler'><button className={styles.btn}>Let`s start!</button></Link>
            </div>
            <div className={styles.image}>
               <img src={mainBg} alt="fitness" />
            </div>
         </div>
      </main>
   )
}