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

/* listar productos. */

router.get('/editar',indexController.editarfront);
/* router.get('/listar',indexController.listar); lista los productos */

/* Editar producto */

/* editar producto. */
router.get('/edit/:id',indexController.editfront);
router.put('/update/:id',indexController.editback);
/* router.get('/editar/:id',indexController.editarfront); muestra el producto a editar (formulario) */
/* router.put('/editar/:id',indexController.editarPLato); edita el plato en la base de datos */

/* eliminar producto. */
router.delete('/delete/:id',indexController.delete );




module.exports = router;