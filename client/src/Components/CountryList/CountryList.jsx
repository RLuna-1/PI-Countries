import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux"
import CountryCard from "../CountryCard/CountryCard";
import styles from "./CountryList.module.css";
import {fetchCountries} from "../../State/Actions/index"

const CountryList = () => {


  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries)
  const filters = useSelector((state) => state.filters)

  useEffect(() => {
    dispatch(fetchCountries(filters));
  }, [dispatch, filters])

  

  const renderCards = countries && countries.map((card, index) => (
    <CountryCard
      key={index}
      id={card.id}
      official={card.official}
      common={card.common}
      image={card.image}
      continent={card.continent}

    />
  ));

  return (
    <div>
      <div className={styles.container}>{countries ? renderCards : <p>There's no countries with the given data</p>}</div>
    </div>
  );
};

export default CountryList;

// ID (Código de tres letras). *
// Nombre. *
// Imagen de la bandera. *
// Continente. *
// Capital. *
// Subregión.
// Área.
// Población. *
