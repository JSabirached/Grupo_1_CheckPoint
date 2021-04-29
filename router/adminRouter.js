const express = require('express');
const router = express.Router();
const {index, comidaList, comidaCreate,comidaStore, ventasList,userList,categorias,comidaEdit,comidaUpdate, comidaDelete,removeUser} = require("../controllers/adminController");

const uploadImages = require("../middlewares/uploadImages");
const addValidator = require("../validations/addValidator");
const admin = require("../middlewares/adminCheck");

router.get("/",admin, index);

router.get('/ventas',admin, ventasList);
router.get('/comidalist',admin, comidaList);
router.get('/userlist',admin, userList);
router.get('/categorias',admin, categorias);

router.get('/create',admin,comidaCreate);
router.post('/create',uploadImages.any(),addValidator,comidaStore);

router.get('/edit/:id',admin,comidaEdit);
router.put('/update/:id',uploadImages.any(),addValidator,comidaUpdate);

router.delete('/delete/:id',comidaDelete);
router.delete('/deletes/:id',removeUser);





module.exports = router;