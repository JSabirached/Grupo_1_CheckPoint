const fs = require('fs');



module.exports = {
    getproductos : () => {
        return JSON.parse(fs.readFileSync(__dirname+'/platosmaster.json','utf-8'));
    },
    setproductos : (data) => {
        fs.writeFileSync(__dirname+'/platosmaster.json',JSON.stringify(data,null,2),'utf-8');
    },
}