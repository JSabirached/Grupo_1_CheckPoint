const { validationResult } = require('express-validator');
const db = require('../database/models');
const { Op } = require('sequelize');

module.exports = {
    comidas:(req,res)=>{
        db.Comidas.findByPk(req.params.id)
        .then(producto=>{
         res.render("admin/comida",{producto
     
         })
        }).catch(error=>res.send(error))
        
         
     },
    
    index: (req, res) => {
        res.render('admin/index')
    },
    comidaList: (req, res) => {

        db.Comidas.findAll()



            .then(foods => {
                res.render("admin/comidaList", {
                    title: "Lista de Comidas",
                    foods

                })
            })
            .catch(error => console.log(error))
    },
    userList: (req, res) => {

        db.Usuario.findAll()

            .then(users => {
                res.render("admin/userList", {
                    title: "Lista de Usuarios",
                    users
                })
            })
            .catch(error => console.log(error))
    },
    ventasList: (req, res) => {

        db.Compras.findAll()



            .then(buys => {
                res.render("admin/ventas", {
                    title: "ventas actuales",

                    buys
                })
            })
            .catch(error => console.log(error))
    },
    categorias: (req, res) => {

        db.Category.findAll()



            .then(categorias => {
                res.render("admin/categorias", {
                    title: "Categorias",
                    categorias
                })
            })
            .catch(error => console.log(error))
    },




    comidaCreate: (req, res) => {
        res.render('admin/comidaCreate')
        db.Category.findAll()



        .then(categorias => {
            res.render("admin/categorias", {
                title: "Categorias",
                categorias
            })
        })


    },
    comidaStore: (req, res) => {
        if (errors.isEmpty()) {
            db.Comidas.create({
                name: req.name,
                price: Number(req.price),
                image: req.files[0].filename,
                category: req.category,
                description: req.description
            })
                .then(() => {
                    res.redirect('/admin')
                })
                .catch(error => res.send(error))

        }
    }
    ,
    comidaEdit: (req, res) => {

        let comida = comidas.find(comida => comida.id === +req.params.id);

        res.render('admin/comidaEdit', {
            id: req.params.id
        })
    },
    comidaUpdate: (req, res) => {

        const { name, price, category, description, image } = req.body;

        comidas.forEach(comida => {
            if (comida.id === +req.params.id) {
                comida.id = Number(req.params.id);
                comida.name = name;
                comida.price = price;
                comida.category = category;
                comida.description = description;
                comida.image = image
            }
        });
        var errores = validationResult(req)
        if (!errores.isEmpty()) {

            return res.render("admin/comidaEdit", { errores: errores.mapped(), old: req.body, id: req.params.id })

        }
        fs.writeFileSync('./database/models', JSON.stringify(Comidas), 'utf-8');
        res.redirect('/admin');
    },
    comidaDelete: (req, res) => {
        comidas.forEach(comida => {
            if (comida.id === +req.params.id) {
                var aEliminar = comidas.indexOf(comida);
                comidas.splice(aEliminar, 1)
            }
        });

        fs.writeFileSync('./database/models', JSON.stringify(Comidas), 'utf-8');
        res.redirect('/admin');
    }
}

