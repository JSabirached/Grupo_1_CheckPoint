var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();
const uploadImages = require('../middlewares/uploadImagesagregarprod');
/* GET users listing. */
router.get('/detalledecompra',indexController.detalledecompra );

router.get('/login',indexController.login );
router.get('/registro',indexController.registro );



/* agregar producto. */
router.get('/agregarproducto',indexController.agregarproducto );
router.post('/agregarproducto',uploadImages.any(),indexController.crearPlato);

/* agregar producto. */

router.get('/editar',indexController.editarfront);


/* eliminar producto. */
router.delete('/delete/:id',indexController.delete );



router.get('/editar',indexController.editarfront );


module.exports = router;