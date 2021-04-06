var express = require('express');
const indexController = require('..//controllers/indexController');
const productsController = require('..//controllers/productsController');
var router = express.Router();
const upload = require('../middlewares/uploadImages')



/* routes secciones */
router.get('/inicioSecciones',productsController.inicioSecciones );
router.get('/seccionBebidas',productsController.seccionBebidas );
router.get('/seccionHamburguesas',productsController.seccionHamburguesas );
router.get('/seccionPostres',productsController.seccionPostres );
router.get('/seccionPizzaEmpa',productsController.seccionPizzaEmpa );

router.get('/secciones',productsController.secciones);
/*router index */


module.exports = router;


