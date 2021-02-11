var express = require('express');
var router = express.Router();
let indexController=require("../controllers/indexController.js")
/* GET home page. */


router.get("/",indexController.index)
router.get("/detalledelproducto",indexController.detallesdelproducto)
router.get('/cartadelivery',indexController.cartadelivery );
router.get('/locales',indexController.locales );
router.get('/reservas',indexController.reservas );
router.get('/promociones',indexController.promociones );
router.get('/novedades',indexController.novedades );
module.exports = router;
