const fs=require("fs");

module.exports={
getproductos:()=>{return JSON.parse(fs.readFileSync(__dirname+"/platos.json"));

},
platosFilter:function(category){
    let platosFiltrados = platos.filter(platos=>platos.category==category)
    return platosFiltrados
   },
   setproductos : (data) => {
    fs.writeFileSync(__dirname+'/platos.json',JSON.stringify(data,null,2),'utf-8');
},
}
