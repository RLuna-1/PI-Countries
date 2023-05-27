import React from "react";


import Button from "../../Components/Button/Button";

import landingGlobe from "../../Assets/landing-globe.png"
import landingName from "../../Assets/landing-name.png"
import styles from "./Landing.module.css";

const LandingPage = () => {

  return (
    <div className={styles.landing}>
      <img className={styles.globe} src={landingGlobe} alt="globe"/>
      <img className={styles.name} src={landingName} alt="name"/>
      <Button className={styles.button} to="/home">Start</Button>
    </div>
  );
};

export default LandingPage;
