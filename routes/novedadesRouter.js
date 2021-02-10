var express = require('express');
var router = express.Router();
let novedadescontroller=require("../controllers/novedadescontroller.js");
/* GET home page. */


router.get("/novedades",novedadescontroller.novedades)

module.exports = router;
