
var {getproductos,setproductos}=require("../data/platos.js");
const fs = require('fs');
let plato=getproductos();
var menu=require("../data/platos.js");
var path=require('path');
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
/* editar producto. (falta editarback) */
editfront : (req,res) => {
    for(i=0;i<plato.bebidas.length;i++){
        if( req.params.id==plato.bebidas[i].id){
            
            var editarplato=plato.bebidas[i]
            res.render('editarplato',{
                editarplato
                 
        })
    }  
     }
     for(i=0;i<plato.postres.length;i++){
        if( req.params.id==plato.postres[i].id){
           var editarplato=plato.postres[i]
            res.render('editarplato',{
               editarplato
            })
                 
        }
         
     }
     for(i=0;i<plato.hamburguesas.length;i++){
        if( req.params.id==plato.hamburguesas[i].id){
var editarplato=plato.hamburguesas[i]
            res.render('editarplato',{
               editarplato
            })
                 
        }
    }
        for(i=0;i<plato.pizzas.length;i++){
            if( req.params.id==plato.pizzas[i].id){
                var editarplato=plato.pizzas[i]
                res.render('editarplato',{
                   editarplato
                })
                     
            }
             
         }
     

   
},

editback :  (req,res)=>{
    var {nombrePlato,tituloPlato, description,precioPlato,descripcionPlato,cantidad}=req.body

    var platos={
                  
        id:req.params.id,
        name: tituloPlato,
        price: precioPlato,
        image:"",
        category:seccion,
        description:descripcionPlato,
    }
    for(i=0;i<plato.bebidas.length;i++){
       if(req.params.id==plato.bebidas[i].id){
       var seccion="bebidas"
       plato.bebidas.splice(i,1);
       plato.bebidas.push(platos)

   }
}
   
    for(i=0;i<plato.postres.length;i++){
       if(req.params.id==plato.postres[i].id){
       var seccion="postres"
       plato.postres.splice(i,1);
       plato.postres.push(platos)
   }
   
   }
   for(i=0;i<plato.pizzas.length;i++){
    if(req.params.id==plato.pizzas[i].id){
    var seccion="pizzas"
    plato.pizzas.splice(i,1);
    plato.pizzas.push(platos)
}

}
for(i=0;i<plato.hamburguesas.length;i++){
    if(req.params.id==plato.hamburguesas[i].id){
    var seccion="hamburguesas"
    plato.hamburguesas.splice(i,1);
    plato.hamburguesas.push(platos)
}

}



setproductos(plato)



res.render('editar',{plato})
},


/* borrar producto. */
delete:(req,res)=>{
    
    
    for(i=0;i<plato.bebidas.length;i++){
       if( req.params.id==plato.bebidas[i].id){
        if(fs.existsSync(path.join('public','images',plato.bebidas[i].image))){
            fs.unlinkSync(path.join('public','images',plato.bebidas[i].image))
        }
                plato.bebidas.splice(i,1);
       }
        
    }
    for(i=0;i<plato.hamburguesas.length;i++){
       if( req.params.id==plato.hamburguesas[i].id){
        if(fs.existsSync(path.join('public','images',plato.hamburguesas[i].image))){
            fs.unlinkSync(path.join('public','images',plato.hamburguesas[i].image))
        }
                plato.hamburguesas.splice(i,1);
       }
       
    }
    for(i=0;i<plato.pizzas.length;i++){
       if( req.params.id==plato.pizzas[i].id){
        if(fs.existsSync(path.join('public','images',plato.pizzas[i].image))){
            fs.unlinkSync(path.join('public','images',plato.pizzas[i].image))
        }
                plato.pizzas.splice(i,1);
       }
       
    }
    for(i=0;i<plato.postres.length;i++){
       if( req.params.id==plato.postres[i].id){
        if(fs.existsSync(path.join('public','images',plato.postres[i].image))){
            fs.unlinkSync(path.join('public','images',plato.postres[i].image))
        }
                plato.postres.splice(i,1);
       }
       
    }
   setproductos(plato);
    res.redirect("/formularios/editar")
}
}