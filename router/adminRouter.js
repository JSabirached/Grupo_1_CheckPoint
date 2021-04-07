const express = require('express');
const router = express.Router();
const {index, comidaList, comidaCreate,comidaStore, ventasList,userList,categorias,detalleProducto, editarProducto, actualizarProducto, borrarProducto,comidas} = require("../controllers/adminController");

const addValidator = require("../validations/addValidator");
const admin = require("../middlewares/adminCheck");

router.get("/", index);

router.get('/ventas', ventasList);
router.get('/comidalist', comidaList);
router.get('/userlist', userList);
router.get('/categorias', categorias);

router.get('/create',comidaCreate);
router.post('/create',comidaStore);

//router.get('/edit/:id',comidaEdit);
//router.put('/update/:id',addValidator,comidaUpdate);

//router.delete('/delete/:id',comidaDelete);



router.get('/comidas/:id',comidas);

module.exports = router;