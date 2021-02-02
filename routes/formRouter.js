var express = require('express');
const indexController = require('../controllers/indexController');
var router = express.Router();

/* GET users listing. */
router.get('/detalledecompra',indexController.detalledecompra );

router.get('/login',indexController.login );
router.get('/registro',indexController.registro );
router.get('/agregarproducto',indexController.agregarproducto );
module.exports = router;
