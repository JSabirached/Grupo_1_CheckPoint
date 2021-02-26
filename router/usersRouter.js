/*variables*/
var express = require('express');
var router = express.Router();
//extraemos  los archivos de controller metodos del controlador cada metodo hace un trabajo distinto
const { registro, processRegistro, login, processLogin,profile, fatality } = require('../controllers/usersController');


/* middleware */
/*instala multer guardar un archivo por el usuario*/
const uploadImages = require('../middlewares/uploadImages');

const registroValidator= require ('../validations/registroValidator');

const checkUser = require('../middlewares/checkUser');

//1-se ocupa de rendelizar una vista pedidos uno por get y uno por post
router.get('/registro', registro);
router.post('/registro',uploadImages.any(),registroValidator,processRegistro);

router.get('/login', login);
router.post('/login', processLogin);

router.get('/profile', profile);
router.get('/profile',checkUser,profile);

//router.get('/delete/:id',eliminar);

router.get('/logout',fatality);

module.exports = router;