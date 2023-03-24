import React from "react";
import styles from './index.module.scss';

import searchIcon from '../../../assets/images/icons/search.svg';

export const SearchButton = ({ handleSearchButton }) => {

   return (
      <button className={styles.btn}
         onClick={handleSearchButton}
      >
         <img src={searchIcon} alt="search" />
      </button>
   )
};