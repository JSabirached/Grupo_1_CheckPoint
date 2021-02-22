const fs = require('fs');



module.exports = {
    getproductos : () => {
        return JSON.parse(fs.readFileSync('C:/Users/matias/Desktop/New folder (34)/Grupo_1_CheckPoint/data/platos.json','utf-8'));
    },
    setproductos : (data) => {
        fs.writeFileSync('C:/Users/matias/Desktop/New folder (34)/Grupo_1_CheckPoint/data/platos.json',JSON.stringify(data,null,2),'utf-8');
    },
}