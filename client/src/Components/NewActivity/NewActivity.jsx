import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchEveryCountry } from "../../State/Actions";
import { postActivity } from "../../State/Actions";
import styles from "./NewActivity.module.css";
import { useHistory } from "react-router-dom";

const NewActivity = () => {
  const dispatch = useDispatch();
  const everyCountry = useSelector((state) => state.everyCountry);

  const [formData, setFormData] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countryIds: "",
  });

  useEffect(() => {
    dispatch(fetchEveryCountry());
  }, [dispatch]);

  const [completed, setCompleted] = useState(false);

  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
    if (
      formData.name &&
      formData.difficulty &&
      formData.duration &&
      formData.season  &&
      event.target.name === "countryIds" &&
      /^\d+$/.test(formData.duration)
    ) {
      setCompleted(true);
    } else {
      setCompleted(false);
    }
  };

  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Actividad creada correctamente");

    dispatch(postActivity(formData));

    setFormData(() => ({
      name: "",
      difficulty: "",
      duration: "",
      season: "",
      countryIds: "",
    }));

    history.push("/home")

  };

  return (
    <div className={styles.activitycontainer}>
      <h1>Create new activity</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label} htmlFor="name">
          Name:
        </label>
        <input
          className={styles.boxes}
          id="name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        ></input>
        <label className={styles.label} htmlFor="difficulty">
          Difficulty:
        </label>
        <select
          className={styles.boxes}
          id="difficulty"
          name="difficulty"
          value={formData.difficulty}
          onChange={handleChange}
        >
          <option disabled selected value="">
            Difficulty
          </option>
          <option value="Easy">Easy</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Challenging">Challenging</option>
        </select>
        <label className={styles.label} htmlFor="duration">
          Duration (in hours):
        </label>
        <input
          className={styles.boxes}
          id="duration"
          type="duration"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
        ></input>
        <label className={styles.label} htmlFor="season">
          Season:
        </label>
        <select
          className={styles.boxes}
          id="season"
          name="season"
          value={formData.season}
          onChange={handleChange}
        >
          <option value="" selected disabled>
            Season
          </option>
          <option value="Winter">Winter</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
          <option value="Autumn">Autumn</option>
        </select>
        <label className={styles.label} htmlFor="countryIds">
          Country:
        </label>
        <select
          id="countryIds"
          name="countryIds"
          value={formData.countryIds}
          onChange={handleChange}
          className={styles.boxescountry}
        >
          <option disabled selected value="">
            Countries
          </option>
          {everyCountry.map((country) => {
            return (
              <option key={country.id} value={country.id}>
                {country.common}
              </option>
            );
          })}
        </select>
        <button className={styles.button} type="submit" disabled={!completed}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewActivity;

// activity: {
//     name:"",
//     difficulty:"",
//     duration:"",
//     season:"",
//   }
