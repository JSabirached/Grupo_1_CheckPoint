const {check, body} = require('express-validator')

module.exports = [
    
    check('email')
    .isEmail().withMessage('debe ser un mail valido'),

    check('pass')
    .notEmpty().withMessage("La contraseña es requerida")
]