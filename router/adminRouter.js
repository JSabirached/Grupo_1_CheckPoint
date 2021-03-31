const express = require('express');
const router = express.Router();
const {index, comidaList, comidaCreate,comidaStore, detalleProducto, editarProducto, actualizarProducto, borrarProducto} = require("../controllers/adminController");

const addValidator = require("../validations/addValidator");
const admin = require("../middlewares/adminCheck");

router.get("/", index);

router.get('/comidalist', comidaList);

router.get('/create',comidaCreate);
router.post('/create',comidaStore);

//router.get('/edit/:id',comidaEdit);
//router.put('/update/:id',addValidator,comidaUpdate);

//router.delete('/delete/:id',comidaDelete);


module.exports = router;