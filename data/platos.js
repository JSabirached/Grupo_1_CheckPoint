const fs = require('fs');
const path=require("path");
const autos_db=path.join("data", "autos.json");



module.exports = {
    getproductos : () => {
        return JSON.parse(fs.readFileSync(__dirname+"/platos.json"));
    },
    setproductos : (data) => {platos_db, json.stringfy(data, null,2, "utf8");
    }
}