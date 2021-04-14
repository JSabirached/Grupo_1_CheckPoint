var express = require('express');
var router = express.Router();

const {registro,processRegistro,login,processLogin,logout,profile,profileEdit,update ,adminChange} = require('../controllers/usersController');

const registroValidator = require('../validations/registroValidator');
const loginValidator = require('../validations/loginValidator');
const uploadUser = require('../middlewares/uploadUser');
const checkUser = require('../middlewares/checkUser');
const editUserValidator = require('../validations/editUserValidator');


router.get('/registro',registro);
router.post('/registro',uploadUser.any(),registroValidator, processRegistro);

router.get('/login',login);
router.post('/login',loginValidator,processLogin);
router.get('/logout',logout);

router.get('/profile/:id',checkUser,profile);
router.get('/profileEdit/:id', checkUser, profileEdit);
router.put('/profileEdit/:id',uploadUser.any(),editUserValidator,update);

router.get('/changeAdmin/:id/:admin',adminChange);


module.exports = router;
