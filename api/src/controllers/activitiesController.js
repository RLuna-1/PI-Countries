const {Activity, Country} = require("../db.js")

const createActivity = async (name, difficulty, duration, season, countryIds) => {

    const newActivity = await Activity.create({
        name: name,
        difficulty: difficulty,
        duration: duration,
        season: season,

    })


    const countriesInstances = await Country.findAll({where: {id: countryIds}})

    return await newActivity.addCountries(countriesInstances)

    
}

const getActivities = async () => {
    const showActivities = await Activity.findAll()

    if(!showActivities.length) throw new Error("No hay actividades")

    return showActivities
}

module.exports = {createActivity, getActivities}