const {check, body} = require('express-validator');
const db = require('../database/models')
//recibe como parametro el formulario el input con un mensaje de valicion
module.exports = [
    check('name')
    .notEmpty().withMessage('El nombre es requerido!'),

    check('surname')
    .notEmpty().withMessage('El apellido es requerido!'),

    check('email')
    .isEmail().withMessage('Debe ser un mail valido!'),

    check("pass")
    .notEmpty().withMessage("La contraseña es requerda"),


//validame su en userdb buscame usuarios . mail es igual al value que es email retorname falso
body('email').custom(value => {
    return db.Usuario.findOne({
        where : {
            email : value
        }
    })
    .then(user => {
        if(user){
            return Promise.reject('Éste email ya está registrado!')
        }
    })
}),

    check('pass')
    .isLength({
        min:6,
        max : 12
    }).withMessage('la contraseña debe tener minimo 6 maximo 12!'),
//si value es distinto a lo que al valor de body (.pass) entonces retorna falso
    body('pass2').custom((value, {req}) => {
        if(value !== req.body.pass){
            return false
        }else{
            return true
        }
    }).withMessage('las contraseñas no coinciden!')
]