const { Country, Activity } = require("../db.js");

const getCountryDetail = async (id) => {
  const showDetails = await Country.findByPk(id, {
    include: {
      model: Activity,
      through: {
        attributes: [],
      },
    },
  });

  if (!showDetails) throw new Error(`No existe ${id}`);

  return showDetails;
};

module.exports = { getCountryDetail };
