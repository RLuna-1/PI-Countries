const express = require("express");
const router = express.Router();

const {
  createActivity,
  getActivities,
} = require("../controllers/activitiesController.js");

router.get("/activities", async (req, res) => {
  try {
    const showGetActivities = await getActivities();
    res.status(200).json(showGetActivities);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.post("/activities", async (req, res) => {
  const { name, difficulty, duration, season, countryIds } = req.body;

  console.log(req.body)


  try {
    const newActivity = await createActivity(name, difficulty, duration, season, countryIds);
    res.status(201).json(newActivity);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;
