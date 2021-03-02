const express = require('express');
const router = express.Router();

const {index, comidaList, comidaCreate, comidaEdit, comidaStore, comidaDelete, comidaUpdate} = require('../controllers/adminController');

router.get('/',index);

router.get('/admin/list',comidaList);

router.get('/admin/create',comidaCreate);
router.post('/admin/store',comidaStore);

router.get('/admin/edit/:id',comidaEdit);
router.put('/admin/update/:id',comidaUpdate);

router.delete('/admin/delete/:id',comidaDelete);


module.exports = router;