const express = require('express');
const router = express.Router();
const {index, comidaList, comidaCreate, comidaEdit, comidaStore, comidaDelete, comidaUpdate} = require('../controllers/adminController');
const addValidator=require("../validations/addValidator")
router.get('/',function logged(req,res,next){if(req.session.user){
    next()
}res.redirect("/")},index);

router.get('/admin/list',function logged(req,res,next){if(req.session.user){
    next()
}res.redirect("/")},comidaList);

router.get('/admin/create',function logged(req,res,next){if(req.session.user){
    next()
}res.redirect("/")},comidaCreate);
router.post('/admin/create',addValidator,comidaStore);

router.get('/admin/edit/:id',comidaEdit);
router.put('/admin/update/:id',addValidator,comidaUpdate);

router.delete('/admin/delete/:id',comidaDelete);


module.exports = router;