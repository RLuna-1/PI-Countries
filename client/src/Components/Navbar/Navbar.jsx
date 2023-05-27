import React from "react";
import { useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";
import SearchBar from "../SearchBar/SearchBar";

import homeButton from "../../Assets/home-button.png"
import newActivityButton from "../../Assets/newactivity-button.png"

const Navbar = () => {
  const location = useLocation();

  if (location.pathname === "/") {
    return null;
  }

  // return (
  //   <nav className={styles.navbar}>
  //     <div className={styles.home}>
  //       <Button to={"/home"} className={styles.homelogo}>
  //         <img className={styles.image} src={home} alt="logo" />
  //       </Button>
  //     </div>
  //     <div className={styles.buttonGroup}>
  //       <Button to={"/form"} className={styles.button}>
  //         Create Activity
  //       </Button>
  //     </div>
  //     <div className={styles.searchbar}>
  //       <SearchBar className={styles.input} />
  //     </div>
  //     <div>
  //       <Filters/>
  //     </div>
  //   </nav>
  // );

  return (
    <nav className={styles.navbar}>
      <Button to={"/home"} className={styles.button} ><img className={styles.homeButton} src={homeButton} alt="Home"/></Button>
      <SearchBar className={styles.input} />
      <Button to={"/form"} className={styles.button} ><img className={styles.newActivityButton} src={newActivityButton} alt="Home"/></Button>
      {/* <Button className={`${styles.button} ${styles.login} ` } to={"/login"}>Login</Button> */}
    </nav>
  );
};

export default Navbar;
