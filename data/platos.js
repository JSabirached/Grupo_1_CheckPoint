const fs = require('fs');
const path = require('path');
const platos_db = path.join('data', 'platos.json');



module.exports = {
    getproductos : () => {
        return JSON.parse(fs.readFileSync(platos_db, 'utf-8'));
    },
    platosFilter:function(category){
        let platosFiltrados = platos.filter(platos=>platos.category==category)
        return platosFiltrados
       },
       setproductos : (data) => {
        fs.writeFileSync(__dirname+'/platos.json',JSON.stringify(data,null,2),'utf-8');
    },
 }