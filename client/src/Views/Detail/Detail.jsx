import React from "react";
import CountryDetail from "../../Components/CountryDetail/CountryDetail";
import styles from "./Detail.module.css";

const Detail = () => {
  return (
    <div className={styles.detail}>
      <CountryDetail />
    </div>
  );
};

export default Detail;
