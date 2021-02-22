/*variables*/
var express = require('express');
var router = express.Router();
//extraemos  los archivos de controller metodos del controlador cada metodo hace un trabajo distinto
const { register, processRegister, login, processLogin,profile } = require('../controllers/usersController');


/* middleware */
/*instala multer guardar un archivo por el usuario*/
const uploadImages = require('../middlewares/uploadImages');

const registerValidator= require ('../validations/registerValidator');

const checkUser = require('../middlewares/checkUser');

//1-se ocupa de rendelizar una vista pedidos uno por get y uno por post
router.get('/register', register);
router.post('/register',uploadImages.any(),registerValidator,processRegister);

router.get('/login', login);
router.post('/login', processLogin);

router.get('/profile', profile);
router.get('/profile',checkUser,profile);



module.exports = router;