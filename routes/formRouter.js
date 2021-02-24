var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();
const uploadImages = require('../middlewares/uploadImagesagregarprod');
/* GET users listing. */
router.get('/detalledecompra',indexController.detalledecompra );

router.get('/login',indexController.login );
router.get('/registro',indexController.registro );




router.get('/agregarproductomaster',indexController.agregarproducto );
router.post('/agregarproductomaster',uploadImages.any(),indexController.crearPlato);

module.exports = router;