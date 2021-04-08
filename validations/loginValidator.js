const {check, body} = require('express-validator')
const db = require('../database/models')

module.exports = [
    
    check('email')
    .isEmail().withMessage('Debe ser un mail valido'),

    check('pass')
    .notEmpty().withMessage("La contraseña es requerida"),


]