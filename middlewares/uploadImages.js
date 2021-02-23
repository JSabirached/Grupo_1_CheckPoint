//procesamiento de archivos subidos al servidor 
//requiere multer y path
const multer = require('multer');
const path = require('path');
//una variable recibe el metodo storage de multerrecibe un objeto literal uno es el destino dond se guarda y el otro toma el fielname osea el avatar o onmbre de campo nombre de la img mas 
const storage = multer.diskStorage({
    destination : (req,file,cb) => {
        cb(null, 'public/img')
    },
    filename : (req,file,cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
})
//crear una variable load y esportarla
 

module.exports = multer({
    storage});
