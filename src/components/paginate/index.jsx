import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./index.module.scss";

export const Paginate = ({ pageCount, handlePageClick }) => {

   return (
      <ReactPaginate
         breakLabel="..."
         onPageChange={handlePageClick}
         pageRangeDisplayed={5}
         pageCount={pageCount}
         renderOnZeroPageCount={null}
         containerClassName={styles.pagination}
         pageClassName={styles.pagination__item}
         activeClassName={styles.pagination__active}
         previousLabel={null}
         nextLabel={null}
      />
   )
};