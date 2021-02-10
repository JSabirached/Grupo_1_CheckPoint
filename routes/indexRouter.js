var express = require('express');
var router = express.Router();
let indexController=require("../controllers/indexController.js")
/* GET home page. */


router.get("/",indexController.index)

router.get('/cartadelivery',indexController.cartadelivery );
router.get('/locales',indexController.locales );
router.get('/reservas',indexController.reservas );
router.get('/promociones',indexController.promociones );

module.exports = router;
