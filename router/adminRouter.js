const express = require('express');
const router = express.Router();
const {index, comidaList, comidaCreate, comidaEdit, comidaStore, comidaDelete, comidaUpdate} = require('../controllers/adminController');
//const { values } = require('../validations/addValidator');
const addValidator=require("../validations/addValidator")
router.get('/',function logged(req,res,next){if(req.session.user){
    next()
}res.redirect("/")},index);

router.get('/list',function logged(req,res,next){if(req.session.user ){
    next()
}else{res.redirect("/")}
res.redirect("/")},comidaList);

router.get('/create',comidaCreate);
//function logged(req,res,next){if(req.session.user){
 //   next()res.redirect("/")}}

//router.post('/create',addValidator,comidaStore);

router.get('/edit/:id',comidaEdit);
router.put('/update/:id',addValidator,comidaUpdate);

router.delete('/delete/:id',comidaDelete);


module.exports = router;