const { Country, Activity } = require("../db.js");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;
const { validationCountries } = require("../utils/utils.js");

const getCountries = async (
  name,
  continent,
  activity,
  order,
  direction,
  page = 1
) => {
  const pageSize = 10;
  const offset = (page - 1) * pageSize;

  const orderClause = [];
  const whereClause = {};
  let includeClause = [];

  if (order === "alphabetical") {
    orderClause.push(["common", direction === "DESC" ? "DESC" : "ASC"]);
  } else if (order === "population") {
    orderClause.push(["population", direction === "DESC" ? "DESC" : "ASC"]);
  }

  if (name) {
    whereClause.official = { [Op.iLike]: `%${name}%` };
  }

  if (continent) {
    whereClause.continent = { [Op.iLike]: `%${continent}%` };
  }

  if (activity) {
    includeClause = [
      {
        model: Activity,
        attributes: [],
        through: { attributes: [] },
        where: { name: { [Op.iLike]: `%${activity}%` } },
      },
    ];
  }

  const response = await Country.findAndCountAll({
    where: whereClause,
    order: orderClause,
    limit: pageSize,
    offset: offset,
    include: includeClause,
  });

  if (!response.rows.length) {
    throw new Error(`There are no countries with the given data`);
  }

  console.log(typeof response);

  return response;
};

const everyCountry = async () => {
  const response = await Country.findAll({ order: [["common", "ASC"]] });

  responseSkeleton = response.map((country) => ({
    id: country.id,
    common: country.common,
  }));

  if (!responseSkeleton.length) {
    throw new Error(`Something went wrong`);
  }

  return responseSkeleton;
};

module.exports = { getCountries, everyCountry };
