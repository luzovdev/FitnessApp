import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./index.module.scss";

export const Paginate = ({ pageCount, handlerPageClick, currentPage }) => {
   return (
      <ReactPaginate
         breakLabel="..."
         onPageChange={handlerPageClick}
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