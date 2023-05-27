import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCountry } from "../../State/Actions/index";
import styles from "./CountryDetail.module.css";

const CountryDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);

  useEffect(() => {
    dispatch(fetchCountry(id));
  }, [dispatch, id]);

  useEffect(() => {
    console.log(country);
  }, [dispatch, country]);

  return (
    <div className={styles.container}>
      <h1 className={styles.name}>{country.official}</h1>
      <img className={styles.image} src={country.image} alt="flag"/>

      <ul className={styles.info}>
        <li>
          <label>Continent:</label> {country.continent} (
          {country.subregion ? country.subregion : country.continent})
        </li>
        <li>
          <label>Capital:</label> {country.capital ? country.capital : "None"}
        </li>
        <li>
          <label>Area: </label>
          {country.area}km<sup>2</sup>
        </li>

        <li>
          <label>Population: </label> {country.population}
        </li>
      </ul>

      <h3 className={styles.activitytitle}>Activities</h3>
      <div className={styles.activitycontainer}>
        {country.activities &&
          country.activities.map((activity) => (
            <ul key={activity.id} className={styles.activities}>
              <li className={styles.activityli}>Name: {activity.name}</li>
              <li className={styles.activityli}>
                Difficulty: {activity.difficulty}
              </li>
              <li className={styles.activityli}>
                Duration: {activity.duration}hs
              </li>
              <li className={styles.activityli}> Season: {activity.season}</li>
            </ul>
          ))}
      </div>
    </div>
  );
};
export default CountryDetail;

// return (
//     <div className={styles.card}>
//       <div className={styles.infocontainer}>
//         <img src={image} alt="Tuki" className={styles.image} />
//         <div className={styles.text}>
//         <p className={styles.name}><center>{common}</center></p>
//         <p className={styles.continent}><center>{continent}</center></p>
//         </div>
//         <p className={styles.details}><center><Button to={`/detail/${id}`} className={styles.button}>Details</Button></center></p>
//       </div>
//     </div>
