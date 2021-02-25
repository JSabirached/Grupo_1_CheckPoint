const fs = require('fs');
const {getproductos,setproductos}=require("../data/platos");

let plato =getproductos();

module.exports={
/*iniciosecciones*/

crearPlato:(req,res)=>{
  var {nombrePlato,tituloPlato, description,precioPlato,descripcionPlato,cantidad}=req.body
        
  
  var platos={
            
           id:"",
           name: tituloPlato,
           price: precioPlato,
           image:req.files[0].filename,
           category:"bebidas",
           description:descripcionPlato,
           cantidad,
          
           
        }
       if(cantidad==1){
 plato.bebidas.push(platos)
}else
if(cantidad==2){
    plato.hamburguesas.push(platos)
   }else
   if(cantidad==3){
    plato.postres.push(platos)
   }else
   if(cantidad==4){
    plato.pizzas.push(platos)
   }
    setproductos(plato)

res.redirect("agregarproducto",)
},
agregarproducto:(req,res)=>{
    res.render("agregarproducto",{

    })
},
inicioSecciones:(req,res)=>{
    res.render("inicioSecciones",{ 

    })
},
seccionBebidas:(req,res)=>{
    res.render("seccionBebidas",{getproductos
    })
},
seccionHamburguesas:(req,res)=>{
    res.render("seccionHamburguesas",{getproductos

    })
},

seccionPlatosPrincipales:(req,res)=>{
    res.render("seccionPlatosPrincipales",{

    })
},


seccionPostres:(req,res)=>{
    res.render("seccionPostres",{getproductos

    })
},
seccionPizzaEmpa:(req,res)=>{
    res.render("seccionPizzaEmpa",{getproductos

})
},
seccionParrrillada:(req,res)=>{
    res.render("seccionParrillada",{

    })
}
}
