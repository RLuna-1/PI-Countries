import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setFilters } from "../../State/Actions";
import Button from "../Button/Button"
import chevronleft from "../../Assets/chevron-left.svg"
import chevronright from "../../Assets/chevron-right.svg"

import styles from "./Pagination.module.css";

function Pagination() {
  const dispatch = useDispatch();

  const { totalCountries, filters } = useSelector((state) => state);
  const { page } = filters;

  const totalPages = Math.ceil( totalCountries / 10 );

  const handlePrevPage = () => {
    if(page > 1)
    dispatch(setFilters({ ...filters, page: page - 1 }));
  };

  const handleNextPage = () => {
    if(page < totalPages)
    dispatch(setFilters({ ...filters, page: page + 1 }));
  };


  // return (<div className={styles.pagination}>
  //   <button onClick={handlePrevPage}>Prev</button>
  //   <span> Page {page} of {totalPages}</span>
  //   <button onClick={handleNextPage}>Next</button>
  // </div>);
  

  return ( totalPages > 2 ?  <div className={styles.pagination}>
    <Button className={styles.button} onClick={handlePrevPage}><img src={chevronleft} alt="Prev"/></Button>
    <span> Page {page} of {totalPages}</span>
    <Button className={styles.button} onClick={handleNextPage}><img src={chevronright} alt="Next"/></Button>
  </div> : <div>{console.log(totalPages)}</div> )
}
export default Pagination;
