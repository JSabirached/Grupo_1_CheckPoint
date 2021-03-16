/*variables*/
var express = require('express');
var router = express.Router();
const path =require('path');
//extraemos  los archivos de controller metodos del controlador cada metodo hace un trabajo distinto
const { registro, processRegistro, login, processLogin,profile, cerrarSession ,eliminar } = require('../controllers/usersController');


/* middleware */
/*instala multer guardar un archivo por el usuario*/
const loginValidation=require('../validations/loginValidator');

const uploadUser = require('../middlewares/uploadUser');

const registroValidator= require ('../validations/registroValidator');

const checkUser = require('../middlewares/checkUser');

const checkRutas = require('../middlewares/checkRutas');

//const checkRutas = require (path.join('..','middleWare','checkRutas'))


//1-se ocupa de rendelizar una vista pedidos uno por get y uno por post
router.get('/registro', registro);
router.post('/registro',uploadUser.any(),processRegistro);

router.get('/login',login);
router.post('/login',checkRutas,processLogin);



router.get('/profile/:id', profile);
router.get('/profile/:id',checkUser,profile);

//router.get('/delete/:id',eliminar);

router.get('/logout',cerrarSession);

module.exports = router;