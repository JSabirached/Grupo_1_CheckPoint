var express = require('express');
const indexController = require('..//controllers/indexController');
const productsController = require('..//controllers/productsController');
var router = express.Router();

var multer =require('multer');
const upload = require('../middlewares/uploadImages')






/* agregarproducto */
router.get('/agregarproducto',productsController.agregarproducto );
router.post('/agregarproducto',upload.any(),productsController.crearPlato);


/* routes secciones */
router.get('/inicioSecciones',productsController.inicioSecciones );
router.get('/seccionBebidas',productsController.seccionBebidas );
router.get('/seccionHamburguesas',productsController.seccionHamburguesas );
router.get('/seccionPlatosPrincipales',productsController.seccionPlatosPrincipales );
router.get('/seccionPostres',productsController.seccionPostres );
router.get('/seccionPizzaEmpa',productsController.seccionPizzaEmpa );
/*router index */
router.get('/seccionParrillada',productsController.seccionParrrillada );

module.exports = router;


