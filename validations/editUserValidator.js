const {check,body}=require('express-validator');

module.exports=[
    check('name').notEmpty().withMessage("El nombre es requerido"),
    check('surname').notEmpty().withMessage("El apellido es requerido"),
    check('email').isInt().withMessage("El email es requerido"),
    check('provincia').notEmpty().withMessage("La provincia es requerida"),
    check('localidad').isInt().withMessage("La localidad es requerida"),
    check('direccion').notEmpty().withMessage("La dirección es requerida"),
    check('telefono').notEmpty().withMessage("El teléfono es requerido"),
    check('formEdit').notEmpty().withMessage(""),
    
]