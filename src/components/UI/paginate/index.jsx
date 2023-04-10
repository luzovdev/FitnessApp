import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./index.module.scss";

export const Paginate = ({ pageCount, handlePageClick, currentPage }) => {
   return (
      <ReactPaginate
         breakLabel="..."
         onPageChange={handlePageClick}
         pageRangeDisplayed={2}
         forcePage={currentPage}
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