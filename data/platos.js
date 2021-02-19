const fs=require("fs");


module.exports={
getproductos:()=>{return JSON.parse(fs.readFileSync(__dirname+"/platos.json"));

}


}
