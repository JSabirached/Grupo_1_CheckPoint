var express = require('express');
var router = express.Router();

const {registro,processRegistro,login,processLogin,logout,profile,profileEdit,update} = require('../controllers/usersController');

const registroValidator = require('../validations/registroValidator');
const loginValidator = require('../validations/loginValidator');
const uploadUser = require('../middlewares/uploadUser');

router.get('/registro',registro);
router.post('/registro',uploadUser.any(),registroValidator, processRegistro);

router.get('/login',login);
router.post('/login',loginValidator,processLogin);
router.get('/logout',logout);

router.get('/profile/:id',profile);
router.post("profiledit", profileEdit);
router.put('/profileEdit',update);

module.exports = router;
