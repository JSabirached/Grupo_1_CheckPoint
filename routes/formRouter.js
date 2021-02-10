var express = require('express');
const formscontroller = require('../controllers/formscontroller');
var router = express.Router();

/* GET users listing. */
router.get('/detallesdecompra',formscontroller.detallesdecompra);
router.get('/detallesdeproducto',formscontroller.detallesdelproducto);
router.get('/login',formscontroller.login );
router.get('/registro',formscontroller.registro );

module.exports = router;
