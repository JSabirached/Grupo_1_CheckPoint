const {check, body} = require('express-validator')

module.exports = [
    
    check('email')
    .IsEmail().withMessage('debe ser un mail valido'),

    check('pass')
    .notEmpty().withMessage("La contraseña es requerida")
]