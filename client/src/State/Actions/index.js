import axios from "axios";
import {
  SET_COUNTRIES,
  SET_FILTERS,
  SET_COUNTRY_BY_ID,
  SET_ACTIVITIES,
  SET_EVERY_COUNTRY,
  ADD_ACTIVITY,
  LOGIN_USER,
} from "./names";

export const loginUser = (loginData) => {
  return {type: LOGIN_USER, payload: loginData}
}

export const setEveryCountry = (countries) => {
  return {
    type: SET_EVERY_COUNTRY,
    payload: countries,
  };
};

export const setCountries = (countries) => {
  console.log(countries);
  return {
    type: SET_COUNTRIES,
    payload: countries,
  };
};

export const setFilters = (filters) => {
  return {
    type: SET_FILTERS,
    payload: filters,
  };
};

export const setCountryById = (country) => {
  return {
    type: SET_COUNTRY_BY_ID,
    payload: country,
  };
};

export const setActivities = (activity) => {
  return {
    type: SET_ACTIVITIES,
    payload: activity,
  };
};

export const addActivity = (activity) => {
  return {
    type: ADD_ACTIVITY,
    payload: activity,
  };
};

export const fetchActivities = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/activities`);
      console.log("activities:", response);
      dispatch(setActivities(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCountry = (id) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/countries/${id}`);

      dispatch(setCountryById(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchCountries = (filters) => {
  const { name, continent, activity, order, direction, page } = filters;

  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/countries", {
        params: { name, continent, activity, order, direction, page },
      });
      console.log(response);
      dispatch(setCountries(response.data));
    } catch (error) {
      console.log("ERROR:", error);
      dispatch(setCountries([]));
    }
  };
};

// export const fetchEveryCountry = () => {
//   return async (dispatch) => {
//     try {
//       let everyCountry = [];
//       let page = 1;

//       while (page <= 25) {
//         const response = await axios.get(
//           `http://localhost:3001/countries?page=${page}`
//         );
//         everyCountry.push(...response.data.rows);
//         page++;
//       }

//       dispatch(setEveryCountry(everyCountry));
//     } catch (error) {
//       console.log(error);
//     }
//   };
// };

export const fetchEveryCountry = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/everyCountry");
      console.log("SEXO:", response);
      dispatch(setEveryCountry(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const postActivity = (activityData) => {
  return async (dispatch) => {
    try {
      console.log(activityData);
      const response = await axios.post(
        `http://localhost:3001/activities`,
        activityData
      );

      dispatch(addActivity(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const postLogin = (loginData) => {
  return async (dispatch) => {
    try {
      console.log(loginData);
      const response = await axios.post(
        `http://localhost:3001/login`,
        loginData
      );

      dispatch(loginUser(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};
