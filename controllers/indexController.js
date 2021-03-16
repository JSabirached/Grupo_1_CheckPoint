var {getproductos,setproductos}=require("../data/platos.js");
const fs = require('fs');
let plato = getproductos();
var menu = require("../data/platos.js");

module.exports={
    editarfront :  (req,res)=>{
        res.render('editar',{menu
    })
},
    editarback:  (req,res)=>{
        res.render('editar')
    },
    index :  (req,res)=>{
        res.render('index')
    },
    novedades :  (req,res)=>{
        res.render('novedades')
    },
detalledecompra:(req,res)=>{
res.render("detalledecompra",{

    
})
},
detallesdelproducto:(req,res)=>{
    res.render("detallesdeproducto",{
    
        
    
})
},
login:(req,res)=>{
    res.render("login",{

    })
},
registro:(req,res)=>{
    res.render("registro",{

    })
},
/*agregar plato */
agregarproducto:(req,res)=>{
    res.render("agregarproducto",{plato

    })
},

crearPlato:(req,res)=>{
    var {nombrePlato,tituloPlato, description,precioPlato,descripcionPlato,cantidad}=req.body
          
    
    var platos={
              
             id:"",
             name: tituloPlato,
             price: precioPlato,
             image:req.files[0].filename,
             category:"bebidas",
             description:descripcionPlato,
             
            
             
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
  
  res.redirect("agregarproducto")
  },
/*index*/
cartadelivery:(req,res)=>{
    res.render("carta",{

    })
},
locales:(req,res)=>{
    res.render("locales",{

    })
},

reservas:(req,res)=>{
    res.render("reservas",{

    })
},


promociones:(req,res)=>{
    res.render("promociones",{

    })
},
novedades:(req,res)=>{
    res.render("novedades",{

    })
},
nosotros:(req,res)=>{
    res.render("nosotros",{

    })
},
recetas:(req,res)=>{
    res.render("recetas",{

    })
},
indexA:(req,res)=>{
    res.render("indexA",{

    })
},
}