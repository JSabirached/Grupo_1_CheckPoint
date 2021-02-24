var platos=require("../data/platosmaster.js");
module.exports={
/*iniciosecciones*/
inicioSecciones:(req,res)=>{
    res.render("inicioSecciones",{ platos

    })
},
seccionBebidas:(req,res)=>{
    res.render("seccionBebidas",{platos
    })
},
seccionHamburguesas:(req,res)=>{
    res.render("seccionHamburguesas",{platos

    })
},

seccionPlatosPrincipales:(req,res)=>{
    res.render("seccionPlatosPrincipales",{

    })
},


seccionPostres:(req,res)=>{
    res.render("seccionPostres",{
platos
    })
},
seccionPizzaEmpa:(req,res)=>{
    res.render("seccionPizzaEmpa",{platos

})
},
seccionParrrillada:(req,res)=>{
    res.render("seccionParrillada",{

    })
}
}
