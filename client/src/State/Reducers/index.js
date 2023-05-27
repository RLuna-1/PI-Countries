import {
  SET_COUNTRIES,
  SET_COUNTRY_BY_ID,
  SET_FILTERS,
  SET_ACTIVITIES,
  SET_EVERY_COUNTRY,
  ADD_ACTIVITY
} from "../Actions/names";

const initialState = {
  countries: [],
  totalCountries: 0,
  country: {},
  filters: {
    name: "",
    continent: "",
    activity: "",
    order: "",
    direction: "",
    page: 1,
  },
  activities: [],
  everyCountry: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return {
        ...state,
        countries: action.payload.rows,
        totalCountries: action.payload.count,
      };
    case SET_FILTERS:
      return { ...state, filters: action.payload };
    case SET_COUNTRY_BY_ID:
      return { ...state, country: action.payload };
    case SET_ACTIVITIES:
      return { ...state, activities: action.payload };
    case SET_EVERY_COUNTRY:
      return { ...state, everyCountry: action.payload };
      case ADD_ACTIVITY:
        return {...state, activity: action.payload}
    default:
      return state;
  }
};

export default reducer;
