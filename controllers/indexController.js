
var {getproductos,setproductos}=require("../data/platos.js");
const fs = require('fs');
let plato=getproductos();
var menu=require("../data/platos.js");

module.exports={

   editarfront :  (req,res)=>{
        res.render('editar',{plato})
   },
   
   
    index :  (req,res)=>{
        res.render('index')
    },
    novedades :  (req,res)=>{
        res.render('novedades')
    },
detalledecompra:(req,res)=>{
res.render("detallesdecompra",{

    
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
          let lastID = 0;
        for(i=0;i<plato.bebidas.length;i++){
            if(plato.bebidas[i].id > lastID){
                lastID = plato.bebidas[i].id
            }
        }    
        for(i=0;i<plato.hamburguesas.length;i++){
            if(plato.hamburguesas[i].id > lastID){
                lastID = plato.hamburguesas[i].id
            }
        }for(i=0;i<plato.postres.length;i++){
            if(plato.postres[i].id > lastID){
                lastID = plato.postres[i].id
            }
        }
        for(i=0;i<plato.pizzas.length;i++){
            if(plato.pizzas[i].id > lastID){
                lastID = plato.pizzas[i].id
            }
        }

    var platos={
              
             id:lastID+1,
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
delete:(req,res)=>{
    for(i=0;i<plato.bebidas.length;i++){
       if( req.params.id==plato.bebidas[i].id){
          
                plato.bebidas.splice(i,1);
       }
        
    }
    for(i=0;i<plato.hamburguesas.length;i++){
       if( req.params.id==plato.hamburguesas[i].id){
          
                plato.hamburguesas.splice(i,1);
       }
       
    }
    for(i=0;i<plato.pizzas.length;i++){
       if( req.params.id==plato.pizzas[i].id){
          
                plato.pizzas.splice(i,1);
       }
       
    }
    for(i=0;i<plato.postres.length;i++){
       if( req.params.id==plato.postres[i].id){
          
                plato.postres.splice(i,1);
       }
       
    }
   setproductos(plato);
    res.redirect("/formularios/editar")
}
}