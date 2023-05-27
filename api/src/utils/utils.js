const { Country } = require("../db.js");
const { Sequelize } = require("sequelize");
const axios = require("axios");

const fillDB = async () => {
  let { data } = await axios.get("https://restcountries.com/v3/all");

  data = data.map((country) => {

    return {
      id: country.cca3,
      common: country.name.common,
      official: country.name.official,
      image: country.flags[0],
      continent: country.continents[0],
      capital: country.capital?.[0],
      subregion: country.subregion,
      area: country.area,
      population: country.population,
    };
  });

  await Country.bulkCreate(data);
};

/////////////////////////////////////////////////////////////////////////////

const validationCountries = async (
  req, res, next
) => {
  const { name, continent, activity, order, direction, page } = req.query;
  let validationErrors = [];

  if (name && (typeof name !== "string" || /\d/.test(name))) {
    // Si name no es un string, o tiene un length diferente a 3 o es un numero (/\d/ matchea cualquier digito entre 0-9 y .test es un metodo del objeto RegExp. Retorna un booleano)
    validationErrors.push("Name must be a string and contain no numbers");
  }

  if (continent && (typeof continent !== "string" || /\d/.test(continent))) {
    validationErrors.push("Continent must be a string and contain no numbers");
  }

  if (activity && (typeof activity !== "string" || /\d/.test(activity))) {
    validationErrors.push("Activity must be a string and contain no numbers");
  }

  if (order && (typeof order !== "string" || /\d/.test(activity) || (order !== "population" && order !== "alphabetical"))) {
    validationErrors.push("Order must either be alphabetical or population");
  }

  if (
    direction &&
    (typeof direction !== "string" ||
      direction !== direction.toUpperCase() ||
      /\d/.test(direction))
  ) {
    validationErrors.push(
      "Direction must be either ASC or DESC."
    );
  }

  if (page && page <= 0) {
    validationErrors.push("Page must be a number greater than zero");
  }

  console.log(validationErrors);

  if (validationErrors.length > 0) {
    return res.status(400).json({ errors: validationErrors });
  }

  next();
};

/////////////////////////////////////////////////////////////////////////////

const validationCountryId = async (req, res, next) => {

  const {idPais} = req.query

  let validationErrors = [];

  if (
    idPais &&
    (typeof idPais !== "string" ||
      idPais.length < 3 ||
      idPais.length > 3 ||
      /\d/.test(idPais))
  ) {
    validationErrors.push(
      "Id must be a 3-character long string and contain no numbers"
    );
  }

  if (validationErrors.length > 0) {
    throw new Error(validationErrors);
  }

  next()

};

const validationPostActivities = (req, res, next) => {

  const { name, difficulty, duration, season, countryIds } = req.body;
  const validationErrors = []

  if (name && (typeof name !==string || /\d/.test(name) )) validationErrors.push("Name must be a string and contain no numbers")
  next()

}


module.exports = { fillDB, validationCountries, validationCountryId };
