const fs =require('fs')
const {check, body} = require('express-validator');
const user_db = JSON.parse(fs.readFileSync ('data/users.json','utf-8'));
//recibe como parametro el formulario el input con un mensaje de valicion
module.exports = [
    check('name')
    .notEmpty().withMessage('el nombre es requerido'),

    check('email')
    .isEmail().withMessage('debe ser un mail valido'),
//validame su en userdb buscame usuarios . mail es igual al value que es email retorname falso
    body('email').custom(value => {
        let result = user_db.find(user => user.mail === value);
       
        if(result){
            return false
        }else{
            return true
        }
    }).withMessage('El mail ya esta registrado'),

    check('pass')
    .isLength({
        min:6,
        max : 12
    }).withMessage('la contraseña debe tener minimo 6 maximo 12'),
//si value es distinto a lo que al valor de body (.pass) entonces retorna falso
    body('pass2').custom((value, {req}) => {
        if(value !== req.body.pass){
            return false
        }else{
            return true
        }
    }).withMessage('las contraseña no coinciden!!')
]