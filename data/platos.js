const fs = require('fs');
const path = require('path');
const platos_db = path.join('data', 'platos.json');



module.exports = {
    getproductos : () => {
        return JSON.parse(fs.readFileSync(platos_db, 'utf-8'));
    },
    setproductos : (data) => {
        fs.writeFileSync (platos_db, JSON.stringify(data, null,2), 'utf-8');
    }
}