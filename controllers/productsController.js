var platos=require("../data/platos.js")
module.exports={
/*iniciosecciones*/
inicioSecciones:(req,res)=>{
    res.render("inicioSecciones",{

    })
},
seccionBebidas:(req,res)=>{
    res.render("seccionBebidas",{platos

    })
},
seccionHamburguesas:(req,res)=>{
    res.render("seccionHamburguesas",{

    })
},

seccionPlatosPrincipales:(req,res)=>{
    res.render("seccionPlatosPrincipales",{

    })
},


seccionPostres:(req,res)=>{
    res.render("seccionPostres",{

    })
},
seccionPizzaEmpa:(req,res)=>{
    res.render("seccionPizzaEmpa",{

    })
},
seccionParrrillada:(req,res)=>{
    res.render("seccionParrillada",{

    })
}

}