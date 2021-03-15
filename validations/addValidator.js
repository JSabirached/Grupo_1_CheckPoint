const {check,validatorResult,body}=require('express-validator');

module.exports=[
    check('name').notEmpty().withMessage("elnombre es requerido"),
    check('description').notEmpty().withMessage("la descripcion es requerida"),
    check('price').isInt().withMessage("precio requerido y numerico"),
    
    
]