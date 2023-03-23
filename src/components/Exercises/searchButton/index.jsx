import React from "react";
import styles from './index.module.scss';

import searchIcon from '../../../assets/images/icons/search.svg';

export const SearchButton = ({ handleSearch }) => {

   return (
      <button className={styles.btn}
         onClick={handleSearch}
      >
         <img src={searchIcon} alt="search" />
      </button>
   )
};