const fs=require("fs");
  //< ! -- json se puede editar -- > //
function platosFilter (category){
 let platosFiltrados = platos.filter(platos=>platos.category==category)
 return platosFiltrados
}

module.exports={
getproductos:()=>{return JSON.parse(fs.readFileSync(__dirname+"/platos.json"));

}


}
