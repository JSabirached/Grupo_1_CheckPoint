var express = require('express');
const indexController = require('../controllers/indexController');
const productsController = require('../controllers/productsController');
var router = express.Router();

/* GET users listing. */

/* routes iniciosecciones */
router.get('/inicioSecciones',productsController.inicioSecciones );
router.get('/seccionBebidas',productsController.seccionBebidas );
router.get('/seccionHamburguesas',productsController.seccionHamburguesas );
router.get('/seccionPlatosPrincipales',productsController.seccionPlatosPrincipales );
router.get('/seccionPostres',productsController.seccionPostres );
router.get('/seccionPizzaEmpa',productsController.seccionPizzaEmpa );
/*router index */

module.exports = router;
