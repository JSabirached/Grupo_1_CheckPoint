const {check,validatorResult,body}=require('express-validator');

module.exports=[
    check('name').notEmpty().withMessage("el nombre es requerido"),
    check('description').notEmpty().withMessage("la descripcion es requerida"),
    check('price').isInt().withMessage("precio requerido y numerico"),
    
  
   
]