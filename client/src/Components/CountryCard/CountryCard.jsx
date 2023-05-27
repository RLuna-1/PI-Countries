import React from "react";
import styles from "./CountryCard.module.css";
import Button from "../Button/Button";

const CountryCard = ({
  id,
  official,
  common,
  image,
  continent,
  capital,
  subregion,
  area,
  population,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.infocontainer}>
        <img src={image} alt="Tuki" className={styles.image} />
        <div className={styles.text}>
        <p className={styles.name}><center>{common}</center></p>
        <p className={styles.continent}><center>{continent}</center></p>
        </div>
        <p className={styles.details}><center><Button className={styles.button} to={`/detail/${id}`} >Details</Button></center></p>
      </div>
    </div>
  );
};

export default CountryCard;

// ID (Código de tres letras). *
// Nombre. *
// Imagen de la bandera. *
// Continente. *
// Capital. *
// Subregión.
// Área.
// Población. *
