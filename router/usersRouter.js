var express = require('express');
var router = express.Router();

const {registro,processRegistro,login,processLogin,logout,profile} = require('../controllers/usersController');

const registroValidator = require('../validations/registroValidator');
const loginValidator = require('../validations/loginValidator')

router.get('/registro',registro);
router.post('/registro',registroValidator, processRegistro);

router.get('/login',login);
router.post('/login',loginValidator,processLogin);
router.get('/logout',logout);

router.get('/profile',profile);

module.exports = router;
