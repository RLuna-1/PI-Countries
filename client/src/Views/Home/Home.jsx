import React from "react";
import CountryList from "../../Components/CountryList/CountryList";
import styles from "./Home.module.css";
import Filters from "../../Components/Filters/Filters";
import Pagination from "../../Components/Pagination/Pagination";
import Button from "../../Components/Button/Button";

const Home = () => {
  return (
    <div className={styles.container}>
      <div>
        <Filters />
      </div>
      <div className={styles.main}>       
        <CountryList />
        <Pagination />
        <Button to="/" className={styles.shinobiButton}>shinobi</Button>
      </div>

    </div>
  );
};

export default Home;
