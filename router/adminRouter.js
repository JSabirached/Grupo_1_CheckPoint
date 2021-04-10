const express = require('express');
const router = express.Router();
const {index, comidaList, comidaCreate,comidaStore, ventasList,userList,categorias,comidaEdit,comidaUpdate,detalleProducto,  actualizarProducto, borrarProducto,comidas} = require("../controllers/adminController");

const uploadImages = require("../middlewares/uploadImages");
const addValidator = require("../validations/addValidator");
const admin = require("../middlewares/adminCheck");

router.get("/", index);

router.get('/ventas', ventasList);
router.get('/comidalist', comidaList);
router.get('/userlist', userList);
router.get('/categorias', categorias);

router.get('/create',comidaCreate);
router.post('/create',uploadImages.any(),addValidator,comidaStore);

router.get('/edit/:id',comidaEdit);
router.put('/update/:id',uploadImages.any(),addValidator,comidaUpdate);

//router.delete('/delete/:id',comidaDelete);





module.exports = router;