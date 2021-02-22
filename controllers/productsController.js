var {getproductos,setproductos}=require("C:/Users/matias/Desktop/New folder (34)/Grupo_1_CheckPoint/data/platos.js");
const fs = require('fs');
let plato=getproductos();

module.exports={
/*iniciosecciones*/

crearPlato:(req,res)=>{
  var {nombrePlato,tituloPlato, description,precioPlato,descripcionPlato}=req.body
        var platos={
            
           id:"",
           name: tituloPlato,
           price: precioPlato,
           image:"",
           category:"bebidas",
           description:descripcionPlato
           
          
           
        }
       
 plato.bebidas.push(platos)
       
 
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
