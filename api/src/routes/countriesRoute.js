const express = require("express");
const router = express.Router();
const {
  getCountries,
  everyCountry,
} = require("../controllers/countriesController.js");
const {
  getCountryDetail,
} = require("../controllers/countriesDetailController.js");
const {
  validationCountries,
  validationCountryId,
} = require("../utils/utils.js");

router.get("/countries", validationCountries, async (req, res) => {
  const { name, continent, activity, order, direction, page } = req.query;
  console.log(req.query);

  try {
    const showCountries = await getCountries(
      name,
      continent,
      activity,
      order,
      direction,
      page
    );
    res.status(200).json(await showCountries);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
});

router.get("/countries/:idPais", validationCountryId, async (req, res) => {
  try {
    let showCountryDetail = await getCountryDetail(req.params.idPais);
    res.status(200).json(showCountryDetail);
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
});

router.get("/everyCountry", async (req, res) => {
  try {
    res.status(200).json(await everyCountry());
  } catch (error) {
    console.log(error.message);
    res.status(400).json(error.message);
  }
});

module.exports = router;
