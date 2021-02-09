var express = require('express');
var router = express.Router();
let indexController=require("../controllers/indexController.js")
/* GET home page. */

router.get('/', function(req, res ) {
    res.render('index', { title: 'Express' });
  });
  router.get('/novedades', function(req, res ) {
    res.render('novedades',indexController.novedades);
  });
router.get("/detalledelproducto",indexController.detallesdelproducto)

module.exports = router;
