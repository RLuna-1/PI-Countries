import React, { useEffect, useContext} from "react";
import styles from "./Filters.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setFilters,
  fetchActivities,
} from "../../State/Actions";
import Button from "../Button/Button";
import { SearchContext} from "../../State/Context/SearchContext";

const Filters = () => {

  const dispatch = useDispatch();

  const { filters } = useSelector((state) => state);
  const { activities } = useSelector((state) => state);

  const {handleSearchInputReset} = useContext(SearchContext)



  useEffect(() => {
    dispatch(fetchActivities());
  }, [dispatch]);

  const handleContinentChange = (event) => {

    dispatch(setFilters({ ...filters, continent: event.target.value }));

  };

  const handleOrderChange = (event) => {

    dispatch(setFilters({ ...filters, order: event.target.value }));

  };

  const handleDirectionChange = (event) => {

    dispatch(setFilters({ ...filters, direction: event.target.value }));

  };

  const handleActivityChange = (event) => {
      dispatch(setFilters({ ...filters, activity: event.target.value }));
  };

  const handleResetClick = () => {

    const resetFilters = {
      continent: "",
      activity: "",
      order: "",
      direction: "",
      page: 1,
    };
    dispatch(setFilters(resetFilters));
    handleSearchInputReset();
    document.querySelectorAll("select").forEach((select) => {
      select.selectedIndex = 0;
    })

  };

  return (
    <div className={styles.container}>
      <select value={filters.continent} className={styles.select} onChange={handleContinentChange}>
        <option value="">All Continents</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
      </select>
      <select value={filters.activity} className={styles.select} onChange={handleActivityChange}>
        <option value="" disabled selected>
          Activity
        </option>
        {activities.map((activity) => {
          return (
            <option key={activity.id} value={activity.name}>
              {activity.name}
            </option>
          );
        })}
      </select>
      <select value={filters.order} className={styles.select} onChange={handleOrderChange}>
        <option selected disabled value="">
          Order
        </option>
        <option value="alphabetical">Alphabetically</option>
        <option value="population">Population</option>
      </select>
      <select value={filters.direction} className={styles.select} onChange={handleDirectionChange}>
        <option value="" selected disabled>
          Direction
        </option>
        <option value="DESC">Descending</option>
        <option value="ASC">Ascending</option>
      </select>
      <Button  className={styles.reset} onClick={handleResetClick}>Reset</Button>
    </div>
  );
};

export default Filters;

// Botones/Opciones para filtrar por continente y por tipo de actividad turística.
// Botones/Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población.
// Paginado: el listado de países se hará por partes. Tu SPA debe contar con un paginado que muestre un total de 10 países por página.
