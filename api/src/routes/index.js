const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const countriesRoute = require('./countriesRoute')
const activitiesRoute = require('./activitiesRoute')



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const router = Router();

router.use('/', countriesRoute)
router.use('/', activitiesRoute)


module.exports = router;
